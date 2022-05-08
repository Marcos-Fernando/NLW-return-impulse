import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "027e01c843668b",
    pass: "1572bb4156ec09"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Marcos Costa <marcosinfcont@gmail.com>',
      subject,
      html: body,
    })
  }
}