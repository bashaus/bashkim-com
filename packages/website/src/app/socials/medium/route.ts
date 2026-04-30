import { NextResponse } from "next/server";

import { getExternalMediumUrl } from "@/libraries/app/navigation";

export function GET() {
  return NextResponse.redirect(getExternalMediumUrl(), {
    status: 303,
  });
}
