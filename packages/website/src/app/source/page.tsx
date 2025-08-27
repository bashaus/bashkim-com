import type { Metadata } from "next";

import SourcePageLockup from "@/domains/source-page/components/SourcePageLockup";
import pathAsUrl from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Source",
    description: "See how this website has been put together",
    alternates: {
      canonical: pathAsUrl("/source"),
    },
  };
}

export default async function SourcePage() {
  return <SourcePageLockup />;
}
