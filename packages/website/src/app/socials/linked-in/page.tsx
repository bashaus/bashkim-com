import { redirect, RedirectType } from "next/navigation";

import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default function SocialsLinkedInPage() {
  return redirect(getExternalLinkedInUrl(), RedirectType.replace);
}
