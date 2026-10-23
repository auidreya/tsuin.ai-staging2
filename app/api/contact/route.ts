// Contact form intake -> Supabase public.contact_messages.
//
// Server-side so the service_role key never reaches the browser. Schema in
// supabase/contact-messages.sql.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_NAME = 120;
const MAX_MESSAGE = 4000;

const SAVE_FAILED = "We couldn't send that just now. Please try again, or reach us on Discord.";

function json(status: number, body: object) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
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
    return json(200, { ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, MAX_NAME);
  if (!name) {
    return json(400, { error: "Please tell us your name so we know how to address you." });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return json(400, { error: "That address doesn't look right. Check it and try again." });
  }

  const message = String(body.message ?? "").trim().slice(0, MAX_MESSAGE);
  if (!message) {
    return json(400, { error: "Tell us what you'd like to talk about." });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("contact: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return json(500, { error: "The contact form is not available right now. Reach us on Discord instead." });
  }

  try {
    const r = await fetch(`${url}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, message, source: "contact" }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("contact: supabase insert failed", r.status, detail.slice(0, 400));
      return json(502, { error: SAVE_FAILED });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("contact: unexpected failure", err);
    return json(502, { error: SAVE_FAILED });
  }
}
