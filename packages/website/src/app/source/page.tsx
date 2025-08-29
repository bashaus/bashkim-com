import type { Metadata } from "next";

import SourcePageLockup from "@/domains/source-page/components/SourcePageLockup";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Source",
    description: "See how this website has been put together",
  };
}

export default async function SourcePage() {
  return <SourcePageLockup />;
}
