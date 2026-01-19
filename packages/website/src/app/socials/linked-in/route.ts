import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect("https://www.linkedin.com/in/bashaus/", {
    status: 303,
  });
}
