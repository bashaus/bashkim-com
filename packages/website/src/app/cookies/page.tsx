import { Metadata } from "next";

import CookiesPageLockup from "@/domains/cookies-page/components/CookiesPageLockup";
import pathAsUrl from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cookie policy",
    description: "How your personal information is used on this website",
    alternates: {
      canonical: pathAsUrl("/cookies"),
    },
  };
}

export default async function CookiesPage() {
  return <CookiesPageLockup />;
}
