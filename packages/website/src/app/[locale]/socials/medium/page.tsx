import { redirect, RedirectType } from "next/navigation";

import { getExternalMediumUrl } from "@/libraries/app/navigation";

export default async function SocialsMediumPage() {
  return redirect(getExternalMediumUrl(), RedirectType.replace);
}
