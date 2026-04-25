import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, nameCompany, problem } = body;

    // ── Validation ──────────────────────────────────────────
    const errors: string[] = [];

    if (!email || !EMAIL_REGEX.test(email)) {
      errors.push("Ingresa un correo electrónico válido (ej. nombre@empresa.com)");
    }
    if (!nameCompany || nameCompany.trim().length < 2) {
      errors.push("Ingresa tu nombre y/o empresa");
    }
    if (!problem || problem.trim().length < 10) {
      errors.push("Describe tu problema con al menos 10 caracteres");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // ── Check API Key ───────────────────────────────────────
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, errors: ["Servicio de correo no configurado. Contacta por WhatsApp."] },
        { status: 500 }
      );
    }

    // ── 1. Notification email to NIGHTFALL DS team ──────────
    const notificationHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #d4af37, #b87333); padding: 24px 32px;">
          <h1 style="margin: 0; color: #0a0a0a; font-size: 22px;">◆ NIGHTFALL DS — Nueva Solicitud</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Correo</td>
              <td style="padding: 12px 0; color: #fff; font-size: 15px;">${email}</td>
            </tr>
            <tr style="border-top: 1px solid #222;">
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Nombre / Empresa</td>
              <td style="padding: 12px 0; color: #fff; font-size: 15px;">${nameCompany}</td>
            </tr>
            <tr style="border-top: 1px solid #222;">
              <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Problema</td>
              <td style="padding: 12px 0; color: #fff; font-size: 15px; line-height: 1.6;">${problem}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #111; border-radius: 8px; border-left: 3px solid #d4af37;">
            <p style="margin: 0; color: #888; font-size: 13px;">Recibido el ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}</p>
          </div>
        </div>
      </div>
    `;

    const notifResult = await resend.emails.send({
      from: "NIGHTFALL DS <onboarding@resend.dev>",
      to: ["nfall3746@gmail.com"],
      subject: `🔔 Nueva solicitud de ${nameCompany}`,
      html: notificationHtml,
    });

    console.log("Notification email result:", JSON.stringify(notifResult));

    // ── 2. Auto-response email to the client ────────────────
    const autoResponseHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #d4af37, #b87333); padding: 24px 32px;">
          <h1 style="margin: 0; color: #0a0a0a; font-size: 22px;">◆ NIGHTFALL DS</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #d4af37; margin-top: 0;">Hola, ${nameCompany.split(" ")[0]} 👋</h2>
          <p style="color: #ccc; line-height: 1.8; font-size: 15px;">
            Hemos recibido tu solicitud de análisis técnico. Nuestro equipo de ingeniería
            ya está revisando los detalles que compartiste.
          </p>
          <div style="margin: 24px 0; padding: 20px; background: #111; border-radius: 8px; border-left: 3px solid #d4af37;">
            <p style="margin: 0 0 8px 0; color: #d4af37; font-weight: bold; font-size: 14px;">¿Qué sigue?</p>
            <ul style="margin: 0; padding-left: 20px; color: #ccc; line-height: 2;">
              <li>Analizamos tu caso en las próximas <strong>24 horas</strong></li>
              <li>Te contactaremos con un diagnóstico inicial</li>
              <li>Recibirás una propuesta de solución personalizada</li>
            </ul>
          </div>
          <p style="color: #888; font-size: 13px; margin-top: 32px;">
            Si necesitas atención inmediata, contáctanos por WhatsApp:
            <a href="https://wa.me/51997470825" style="color: #d4af37; text-decoration: none;"> +51 997 470 825</a>
          </p>
          <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />
          <p style="color: #555; font-size: 12px; margin: 0;">
            NIGHTFALL DS — Ingeniería de Eficiencia Corporativa<br/>
            Arequipa, Perú — Soporte Global<br/>
            soporte@nightfallds.lat
          </p>
        </div>
      </div>
    `;

    // Auto-response may fail if domain not verified — don't block success
    try {
      const autoResult = await resend.emails.send({
        from: "NIGHTFALL DS <onboarding@resend.dev>",
        to: [email],
        subject: "✓ Recibimos tu solicitud — NIGHTFALL DS",
        html: autoResponseHtml,
      });
      console.log("Auto-response email result:", JSON.stringify(autoResult));
    } catch (autoErr) {
      // Log but don't fail — notification to team already sent
      console.error("Auto-response email failed (domain not verified?):", autoErr);
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Error al enviar. Intenta nuevamente o contáctanos por WhatsApp."],
      },
      { status: 500 }
    );
  }
}
