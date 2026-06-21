const contactTo = process.env.CONTACT_TO || "info@deldev.nl";
const contactFrom =
  process.env.CONTACT_FROM || "DELDEV <onboarding@resend.dev>";

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return response.status(500).json({
      error: "Missing RESEND_API_KEY",
    });
  }

  const name = clean(request.body?.name);
  const email = clean(request.body?.email);
  const message = clean(request.body?.message);
  const subject = clean(request.body?.subject) || "New project inquiry";

  if (!name || !email || !message) {
    return response.status(400).json({
      error: "Name, email and message are required",
    });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New DELDEV contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFrom,
      to: contactTo,
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();

    return response.status(502).json({
      error: "Email could not be sent",
      details: errorText,
    });
  }

  return response.status(200).json({ ok: true });
}
