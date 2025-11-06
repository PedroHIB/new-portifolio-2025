import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Campos obrigatórios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pedrohizib@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "pedrohizib@gmail.com",
      subject: `Contato do portfólio - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return res
      .status(500)
      .json({ success: false, message: "Erro ao enviar e-mail." });
  }
}
