import { Metadata } from "next";

import CookiesPageLockup from "@/domains/cookies-page/lockups/CookiesPageLockup";
import { getCookiesPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cookie policy",
    description: "How your personal information is used on this website",
    alternates: {
      canonical: pathAsUrl(getCookiesPath()),
    },
  };
}

export default async function CookiesPage() {
  return <CookiesPageLockup />;
}
