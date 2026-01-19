import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(
    "https://stackoverflow.com/users/600240/bashaus",
    { status: 303 },
  );
}
