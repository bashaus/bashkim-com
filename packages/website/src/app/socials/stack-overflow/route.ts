import { NextResponse } from "next/server";

import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

export function GET() {
  return NextResponse.redirect(getExternalStackOverflowUrl(), { status: 303 });
}
