import { Metadata } from "next";
import { notFound } from "next/navigation";

import CookiesPageLockup from "@/domains/cookies-page/lockups/CookiesPageLockup";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getCookiesPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());

  return {
    title: "Cookie policy",
    description: "How your personal information is used on this website",
    alternates: {
      canonical: pathAsUrl(getCookiesPath({ locale })),
    },
  };
}

export default async function CookiesPage() {
  return <CookiesPageLockup />;
}
