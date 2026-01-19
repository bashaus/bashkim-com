import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect("https://github.com/bashaus/", {
    status: 303,
  });
}
