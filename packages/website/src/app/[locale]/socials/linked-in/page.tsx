import { redirect, RedirectType } from "next/navigation";

import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default async function SocialsLinkedInPage() {
  return redirect(getExternalLinkedInUrl(), RedirectType.replace);
}
