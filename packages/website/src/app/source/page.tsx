import type { Metadata } from "next";

import SourcePageLockup from "@/domains/source-page/components/SourcePageLockup";
import generateCanonical from "@/libraries/app/generate-canonical";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Source",
    description: "See how this website has been put together",
    alternates: {
      canonical: generateCanonical("/source"),
    },
  };
}

export default async function SourcePage() {
  return <SourcePageLockup />;
}
