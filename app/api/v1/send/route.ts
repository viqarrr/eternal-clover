import { NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as uuid } from "uuid";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: `Contact From ${email} <onboarding@resend.dev>`,
      to: "viqarmulya@gmail.com",
      subject: subject || "New Contact Form Submission",
      replyTo: email,
      headers: {
        "X-Entity-Ref-ID": uuid(),
      },
      html: `<div><h1>Hello, I am ${name}!</h1><p>${message}</p></div>`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data, message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to process request ${error}` },
      { status: 500 }
    );
  }
}
