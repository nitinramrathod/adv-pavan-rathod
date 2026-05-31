import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  city: z.string().min(2).max(100),
  legalIssue: z.string().min(1),
  message: z.string().min(10).max(2000),
});

const rateLimit = new Map<string, { count: number; ts: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const entry = rateLimit.get(ip);
    if (entry && now - entry.ts < 60000 && entry.count >= 3) {
      return NextResponse.json({ error: "Too many requests. Please wait a minute." }, { status: 429 });
    }
    rateLimit.set(ip, { count: (entry?.count || 0) + 1, ts: entry?.ts || now });

    const body = await req.json();
    const data = schema.parse(body);
    await sendContactEmail(data);
    return NextResponse.json({ success: true, message: "Your inquiry has been received. We will contact you shortly." });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: err.errors }, { status: 400 });
    }
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
