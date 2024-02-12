"use strict";

const nodemailer = require("nodemailer");
const responseHttp = require("../response/response");

module.exports.getSendEmail = async (event) => {
  if (event.queryStringParameters) {
    const { remitente, destinatario, texto, fono, nombre } =
      event.queryStringParameters;

    let transport = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587, // Puerto STARTTLS
      secure: false, // TLS obligatorio
      auth: {
        user: "AKIAZQ3DTQIHXMLWWK5U",
        pass: "BAn1NkS0U96lZHknZMHOBrAdoSR/9azng0ziIb1PiTEH",
      },
      tls: { rejectUnauthorized: false },
    });

    try {
      await transport.sendMail({
        from: remitente,
        to: remitente,
        subject: `responder a... ${destinatario} Fono: ${fono} Nombre: ${nombre}`,
        text: texto,
      });
    } catch (error) {
      console.log(error);
    }
    return responseHttp(true, "Send email is correct");
  }
  return responseHttp(false, "not send email");
};

// https://s86cyb2go1.execute-api.us-east-1.amazonaws.com/dev/sendEmail
// ?remitente    = ventas@molinocanuelaschile.cl
// &destinatario = ventas@molinocanuelaschile.cl
// &texto        = enviado parametrico
// &nombre       = rufus