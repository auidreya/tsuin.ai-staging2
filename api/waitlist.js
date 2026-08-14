// Waitlist intake -> Supabase.
//
// Runs as a Vercel Node function so the service_role key stays server-side and
// never reaches the browser. Writes to public.waitlist (id, email, source,
// created_at). The form also asks "What would you hand to a twin?"; that has no
// column in the current schema, so we attempt to write `use_case` and silently
// retry without it if the column does not exist. Add the column and the answer
// starts being captured with no code change:
//
//   alter table public.waitlist add column use_case text;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_USE_CASE = 2000;

// Postgres/PostgREST codes for "that column isn't there"
const MISSING_COLUMN = new Set(["PGRST204", "42703"]);

function json(res, status, body) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.status(status).send(JSON.stringify(body));
}

async function insert(url, key, row) {
  return fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
}

// CommonJS on purpose: this project has no package.json, so Vercel's Node
// runtime treats .js as CJS and an ESM `export default` would fail to load.
module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { error: "Method not allowed" });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("waitlist: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return json(res, 500, { error: "Waitlist is not configured yet." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return json(res, 400, { error: "Malformed request." }); }
  }
  body = body || {};

  // Honeypot: real people leave this empty. Report success so bots don't probe.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json(res, 200, { ok: true });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return json(res, 400, { error: "That address doesn't look right. Check it and try again." });
  }

  const useCase = String(body.useCase || "").trim().slice(0, MAX_USE_CASE);
  const source = String(body.source || "landing").trim().slice(0, 60) || "landing";

  try {
    let r = await insert(url, key, useCase ? { email, source, use_case: useCase } : { email, source });

    if (!r.ok && useCase) {
      const detail = await r.clone().json().catch(() => ({}));
      if (MISSING_COLUMN.has(detail.code)) {
        // No use_case column yet — keep the signup rather than lose it.
        r = await insert(url, key, { email, source });
      }
    }

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("waitlist: supabase insert failed", r.status, detail.slice(0, 400));
      return json(res, 502, { error: "We couldn't save that just now. Please try again." });
    }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("waitlist: unexpected failure", err);
    return json(res, 502, { error: "We couldn't save that just now. Please try again." });
  }
};
