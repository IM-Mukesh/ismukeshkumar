import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectToDatabase } from "@/lib/mongodb";
import { Message } from "@/models/Message";
import { profile } from "@/lib/data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  let persisted = false;

  if (process.env.MONGODB_URI) {
    try {
      await connectToDatabase();
      await Message.create({ firstName, lastName, email, message });
      persisted = true;
    } catch (err) {
      console.error("Failed to save contact message to MongoDB", err);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
  } else {
    console.log("New contact message (MONGODB_URI not configured):", {
      firstName,
      lastName,
      email,
      message,
    });
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || profile.email,
        replyTo: email,
        subject: `New portfolio message from ${firstName} ${lastName}`,
        text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
      });
    } catch (err) {
      console.error("Failed to send contact email notification", err);
    }
  }

  return NextResponse.json({ ok: true, persisted });
}
