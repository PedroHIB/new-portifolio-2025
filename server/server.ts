import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://portifolio-phib.vercel.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }) as unknown as express.RequestHandler
);

app.use(express.json());

// rota que recebe os dados do form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Campos obrigatórios" });
  }

  try {
    // configuração do SMTP — aqui é Gmail
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
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
