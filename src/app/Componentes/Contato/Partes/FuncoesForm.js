"use server"

export async function resposta(event) {
  
  let name = event.get('name').toString();
  let email = event.get('email').toString();
  let message = event.get('message').toString();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.email,
    to: process.env.bullet,
    subject: `Mensagem de ${name}`,
    text: message + " | Enviado de: " + email,
    html: `<div>${message}</div><p>Enviado de:
      ${email}</p>`
  };
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  });
}