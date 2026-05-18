import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, projectType, scope, deadline, budget, message } = body;

  if (!name || !email || !projectType || !scope) {
    return Response.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: monospace; background: #0A0A0F; color: #E8E8F0; padding: 32px; border-radius: 12px; max-width: 600px;">
      <h2 style="color: #7F77DD; margin-top: 0;">📬 Nouvelle demande de devis</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${[
          ["Nom", name],
          ["Email", email],
          ["Type de projet", projectType],
          ["Périmètre", scope],
          ["Deadline", deadline || "Non précisée"],
          ["Budget", budget || "Non précisé"],
          ["Message", message || "—"],
        ]
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 10px 0; color: #8888AA; width: 140px; vertical-align: top;">${label}</td>
            <td style="padding: 10px 0; color: #E8E8F0; border-bottom: 1px solid #1E1E2E;">${value}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: "benjamin.bottalico1@gmail.com",
      replyTo: email,
      subject: `[Devis] ${projectType} — ${name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
