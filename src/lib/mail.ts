import nodemailer from "nodemailer";

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export function createMailTransporter() {
  const port = Number(process.env.SMTP_PORT ?? "587");
  return nodemailer.createTransport({
    host: getEnv("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: { user: getEnv("SMTP_USER"), pass: getEnv("SMTP_PASS") },
  });
}

export function getContactRecipient() {
  return process.env.CONTACT_TO_EMAIL ?? getEnv("SMTP_USER");
}
