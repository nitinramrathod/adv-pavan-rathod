import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendCallbackEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  preferredTime: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    await sendCallbackEmail(data);
    return NextResponse.json({ success: true, message: "Callback request received." });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }
}
