"use server";

import { cookies } from "next/headers";

export async function getCookiesAccepted() {
  const cookieJar = await cookies();
  return cookieJar.get("cookies")?.value === "accepted";
}
