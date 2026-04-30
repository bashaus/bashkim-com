import { NextResponse } from "next/server";

import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export function GET() {
  return NextResponse.redirect(getExternalLinkedInUrl(), {
    status: 303,
  });
}
