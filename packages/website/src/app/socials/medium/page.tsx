import { redirect, RedirectType } from "next/navigation";

import { getExternalMediumUrl } from "@/libraries/app/navigation";

export default function SocialsMediumPage() {
  return redirect(getExternalMediumUrl(), RedirectType.replace);
}
