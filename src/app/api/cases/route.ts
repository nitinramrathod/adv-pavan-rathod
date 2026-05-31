import { NextRequest, NextResponse } from "next/server";
import cases from "@/data/cases.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const state = searchParams.get("state");
  const year = searchParams.get("year");
  const featured = searchParams.get("featured");
  const q = searchParams.get("q")?.toLowerCase();

  let result = [...cases];
  if (category && category !== "all") result = result.filter(c => c.category === category);
  if (state && state !== "all") result = result.filter(c => c.state === state);
  if (year && year !== "all") result = result.filter(c => c.year === parseInt(year));
  if (featured === "true") result = result.filter(c => c.featured);
  if (q) result = result.filter(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.tags.some(t => t.includes(q)));

  return NextResponse.json(result);
}
