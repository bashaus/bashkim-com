import { redirect, RedirectType } from "next/navigation";

import { determineLocale } from "@/i18n/locale/source/determine";
import { getHomePath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export default async function RootPage() {
  const locale = await determineLocale();
  const homeUrl = pathAsUrl(getHomePath({ locale }));

  return redirect(homeUrl, RedirectType.replace);
}
