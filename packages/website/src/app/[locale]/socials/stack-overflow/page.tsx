import { redirect, RedirectType } from "next/navigation";

import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

export default async function SocialsStackOverflowPage() {
  return redirect(getExternalStackOverflowUrl(), RedirectType.replace);
}
