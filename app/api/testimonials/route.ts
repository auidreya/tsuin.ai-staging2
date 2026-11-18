// Testimonials: tote bag claims in, billboard out. Supabase public.testimonials.
//
// Server-side so the service_role key never reaches the browser. Schema in
// supabase/testimonials.sql.
//
//   POST  name + email + 5 survey answers (+ optional wall line) -> saves the
//         claim, returns a claim code. Survey answers are private.
//         Email is unique: a repeat doesn't overwrite, it returns the original
//         claim flagged `alreadyClaimed` so staff can see it on the pass.
//   GET   latest visible wall lines for the billboard: name + text only.
//         Email and survey answers never leave the server.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_NAME = 80;
const MAX_TESTIMONIAL = 280;
const MAX_ANSWER = 1000;

// Mirrors SURVEY in app/_components/tote-bag-popup.tsx and the q*_ columns in
// supabase/testimonials.sql.
const SURVEY_KEYS = ["q1_lost_knowhow", "q2_where_it_lives", "q3_ai_reexplain", "q4_tried", "q5_magic_wand"] as const;
const BILLBOARD_LIMIT = 30;

const SAVE_FAILED = "We couldn't save that just now. Please try again, or ask a tsuin staff member.";

type Claim = { id: string; created_at: string };

function json(status: number, body: object) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function supabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return {
    url,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  };
}

// A short code staff can read off the screen and match against the row id.
function codeOf(id: string) {
  return id.replace(/-/g, "").slice(0, 6).toUpperCase();
}

// Collapse runs of whitespace so a wall of newlines can't stretch the billboard.
function clean(s: unknown, max: number) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function GET() {
  const db = supabase();
  if (!db) return json(200, { testimonials: [] });
  try {
    const r = await fetch(
      `${db.url}/rest/v1/testimonials?select=id,name,testimonial,created_at&hidden=is.false&testimonial=not.is.null&order=created_at.desc&limit=${BILLBOARD_LIMIT}`,
      { headers: db.headers, cache: "no-store" },
    );
    if (!r.ok) {
      console.error("testimonials: supabase select failed", r.status, (await r.text().catch(() => "")).slice(0, 400));
      return json(200, { testimonials: [] });
    }
    return json(200, { testimonials: await r.json() });
  } catch (err) {
    console.error("testimonials: unexpected failure on GET", err);
    return json(200, { testimonials: [] });
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = ((await request.json()) as Record<string, unknown>) ?? {};
  } catch {
    return json(400, { error: "Malformed request." });
  }

  // Honeypot: real people leave this empty. Report success so bots don't probe.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json(200, { ok: true, code: "------", claimedAt: new Date().toISOString() });
  }

  const name = clean(body.name, MAX_NAME);
  if (!name) {
    return json(400, { error: "Please tell us your name." });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return json(400, { error: "That address doesn't look right. Check it and try again." });
  }

  const raw = (body.answers && typeof body.answers === "object" ? body.answers : {}) as Record<string, unknown>;
  const answers: Record<string, string> = {};
  for (const [i, key] of SURVEY_KEYS.entries()) {
    // Keep line breaks in private answers; only trim and cap them.
    const value = String(raw[key] ?? "").trim().slice(0, MAX_ANSWER);
    if (!value) return json(400, { error: `Please answer question ${i + 1}.` });
    answers[key] = value;
  }

  // Optional public wall line. Empty -> null, so it never shows on the billboard.
  const testimonial = clean(body.testimonial, MAX_TESTIMONIAL) || null;

  const db = supabase();
  if (!db) {
    console.error("testimonials: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return json(500, { error: SAVE_FAILED });
  }

  try {
    const r = await fetch(`${db.url}/rest/v1/testimonials?select=id,created_at`, {
      method: "POST",
      headers: { ...db.headers, Prefer: "return=representation" },
      body: JSON.stringify({ name, email, testimonial, ...answers, source: "home-popup" }),
    });

    if (r.ok) {
      const [row] = (await r.json()) as Claim[];
      return json(200, { ok: true, code: codeOf(row.id), claimedAt: row.created_at });
    }

    // 409 = unique violation on email: they've claimed before. Show that claim.
    if (r.status === 409) {
      const existing = await fetch(
        `${db.url}/rest/v1/testimonials?select=id,created_at&email=eq.${encodeURIComponent(email)}&limit=1`,
        { headers: db.headers },
      );
      const [row] = existing.ok ? ((await existing.json()) as Claim[]) : [];
      if (row) {
        return json(200, { ok: true, alreadyClaimed: true, code: codeOf(row.id), claimedAt: row.created_at });
      }
    }

    const detail = await r.text().catch(() => "");
    console.error("testimonials: supabase insert failed", r.status, detail.slice(0, 400));
    return json(502, { error: SAVE_FAILED });
  } catch (err) {
    console.error("testimonials: unexpected failure on POST", err);
    return json(502, { error: SAVE_FAILED });
  }
}
