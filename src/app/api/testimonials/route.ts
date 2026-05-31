import { NextResponse } from "next/server";
import testimonials from "@/data/testimonials.json";

export async function GET() {
  return NextResponse.json(testimonials);
}
