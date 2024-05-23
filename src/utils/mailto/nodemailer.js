import nodemailer from "nodemailer";
import { getConfig } from '../../config'

const config = getConfig();

const email = config.mailTo.email
const pass = config.mailTo.pass

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

/* 
export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
}); */

/* export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: pass,
  },
});
 */

export const mailOptions = {
  from: email,
  to: email,
};
