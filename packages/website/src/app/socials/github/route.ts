import { NextResponse } from "next/server";

import { getExternalGitHubUrl } from "@/libraries/app/navigation";

export function GET() {
  return NextResponse.redirect(getExternalGitHubUrl(), {
    status: 303,
  });
}
