const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const {name, email, comment} = req.body;

  if(!name || !email || !comment) {
    return res.status(400).json({error: "Todos os campos são obrigatórios!"});
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try{
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Novo contato via portfólio",
      replyTo: email,
      html:`
        <h3>Nova mensagem recebida:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comentário:</strong> ${comment}</p>
      `,
    });

    res.status(200).json({success: true, message: "Mensagem enviada com sucesso!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: "Erro ao enviar o e-mail"});
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));