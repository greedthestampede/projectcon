"use server"

export async function resposta(event) {
  
  let name = event.get('name').toString();
  let email = event.get('email').toString();
  let subject = event.get('subject').toString();
  let message = event.get('message').toString();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "botdogrimorio@gmail.com",
      pass: "oallkklrelpxenuc",
    },
    secure: true,
  });

  const mailData = {
    from: "botdogrimorio@gmail.com",
    to: "contadevotarbastante@gmail.com",
    subject: `${subject}`,
    text: message + " | Enviado por: " + name + " | Email: " + email,
    html: `<div>${message}</div><p>Enviado por: ${name}</p><p>Email:
      ${email}</p>`
  };
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err);
    else
      console.log(mailData);
      console.log(info);
  });
}