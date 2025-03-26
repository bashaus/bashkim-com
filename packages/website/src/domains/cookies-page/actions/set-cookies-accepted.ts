"use server";

import { cookies } from "next/headers";

export async function setCookiesAccepted() {
  const cookieJar = await cookies();
  cookieJar.set("cookies", "accepted");
}
