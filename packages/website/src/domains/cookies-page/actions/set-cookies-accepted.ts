"use server";

import { cookies } from "next/headers";

export async function setCookiesAccepted() {
  const cookieJar = await cookies();
  return cookieJar.set("cookies", "accepted");
}
