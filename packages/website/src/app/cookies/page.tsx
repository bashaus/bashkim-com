import CookiesPageLockup from "@/domains/cookies-page/components/CookiesPageLockup";
import generateCanonical from "@/libraries/app/generateCanonical";

export async function generateMetadata() {
  return {
    title: "Cookie policy",
    description: "How your personal information is used on this website",
    alternates: {
      canonical: generateCanonical("/cookies/"),
    },
  };
}

export default async function CookiesPage() {
  return <CookiesPageLockup />;
}
