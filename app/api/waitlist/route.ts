// Waitlist intake -> Supabase.
//
// Runs server-side so the service_role key never reaches the browser. Writes to
// public.waitlist (id, name, email, source, created_at, use_case). The full
// schema lives in supabase/schema.sql. The optional columns (`name`,
// `use_case`) may not exist on older schemas, so each insert drops them and
// retries rather than losing the signup.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_NAME = 120;
const MAX_USE_CASE = 2000;

// Columns we'll shed one at a time if the schema doesn't have them yet.
const OPTIONAL = ["use_case", "name"] as const;

// Postgres/PostgREST codes for "that column isn't there".
const MISSING_COLUMN = new Set(["PGRST204", "42703"]);

const SAVE_FAILED = "We couldn't save that just now. Please try again.";

type Row = { email: string; source: string; name?: string; use_case?: string };

function json(status: number, body: object) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

// Upsert on email: public.waitlist has a unique constraint there, so someone
// signing up twice refreshes their row instead of getting an error.
function insert(url: string, key: string, row: Row) {
  return fetch(`${url}/rest/v1/waitlist?on_conflict=email`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal,resolution=merge-duplicates",
    },
    body: JSON.stringify(row),
  });
}

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("waitlist: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return json(500, { error: "Waitlist is not configured yet." });
  }

  let body: Record<string, unknown>;
  try {
    body = ((await request.json()) as Record<string, unknown>) ?? {};
  } catch {
    return json(400, { error: "Malformed request." });
  }

  // Honeypot: real people leave this empty. Report success so bots don't probe.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json(200, { ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return json(400, { error: "That address doesn't look right. Check it and try again." });
  }

  const name = String(body.name ?? "").trim().slice(0, MAX_NAME);
  if (!name) {
    return json(400, { error: "Please tell us your name so we know how to address you." });
  }

  const useCase = String(body.useCase ?? "").trim().slice(0, MAX_USE_CASE);
  const source = String(body.source ?? "landing").trim().slice(0, 60) || "landing";

  try {
    const row: Row = { email, source, name };
    if (useCase) row.use_case = useCase;

    let r = await insert(url, key, row);

    // Shed optional columns one at a time if this schema predates them, so a
    // missing column costs us the field rather than the whole signup.
    for (const column of OPTIONAL) {
      if (r.ok || !(column in row)) continue;
      const detail = (await r.clone().json().catch(() => ({}))) as { code?: string };
      if (!detail.code || !MISSING_COLUMN.has(detail.code)) break;
      console.warn(`waitlist: public.waitlist has no "${column}" column; dropping it`);
      delete row[column];
      r = await insert(url, key, row);
    }

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("waitlist: supabase insert failed", r.status, detail.slice(0, 400));
      return json(502, { error: SAVE_FAILED });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("waitlist: unexpected failure", err);
    return json(502, { error: SAVE_FAILED });
  }
}
