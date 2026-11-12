import { redirect, RedirectType } from "next/navigation";

import { getExternalGitHubUrl } from "@/libraries/app/navigation";

export default async function SocialsGitHubPage() {
  return redirect(getExternalGitHubUrl(), RedirectType.replace);
}
