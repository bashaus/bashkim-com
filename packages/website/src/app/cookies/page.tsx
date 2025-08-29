import { Metadata } from "next";

import CookiesPageLockup from "@/domains/cookies-page/components/CookiesPageLockup";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cookie policy",
    description: "How your personal information is used on this website",
  };
}

export default async function CookiesPage() {
  return <CookiesPageLockup />;
}
