import { NextResponse } from "next/server";
import { createMailTransporter, getContactRecipient } from "@/lib/mail";
import { siteConfig } from "@/data/portfolio";

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const n = name?.trim();
    const e = email?.trim();
    const m = message?.trim();

    if (!n || !e || !m) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const transporter = createMailTransporter();
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: getContactRecipient(),
      replyTo: `"${n}" <${e}>`,
      subject: `Portfolio inquiry from ${n}`,
      text: `Name: ${n}\nEmail: ${e}\n\n${m}`,
      html: `<p><strong>Name:</strong> ${n}</p><p><strong>Email:</strong> ${e}</p><p>${m}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: `Failed to send. Email ${siteConfig.email} directly.` },
      { status: 500 }
    );
  }
}
