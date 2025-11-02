// ...existing code...
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A simple API route —  usage and removed the intentional thrown error
export function GET() {
  return NextResponse.json({ data: "endpoint is OK" });
}
// ...existing code...
