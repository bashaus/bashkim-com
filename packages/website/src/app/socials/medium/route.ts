import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect("https://medium.com/@bashaus", {
    status: 303,
  });
}
