import { NextResponse } from "next/server";
import mockLinks from "@/data/mock-links.json";

export async function GET() {
  return NextResponse.json(mockLinks);
}
