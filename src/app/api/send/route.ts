import { createElement } from "react";
import { Resend } from "resend";

import EmailTemplate from "@/components/common/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "From <onboarding@resend.dev>",
      to: ["vickyadri103@gmail.com"],
      reply_to: email,
      subject: "Hello there, Get in touch with me 👋",
      react: createElement(EmailTemplate, {
        name: name,
        message: message,
      }),
    });

    if (error) {
      return Response.json(error);
    }

    return Response.json({
      message: "Email Sent Successful!",
      data: data,
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({
    message: "Hello World!",
  });
}
