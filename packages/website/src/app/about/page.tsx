import AboutPageLockup from "../../domains/about-page/components/AboutPageLockup";
import generateCanonical from "../../libraries/app/generateCanonical";

export async function generateMetadata() {
  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
    keywords: ["bashkim isai", "creative technologist", "digital nomad"],
    alternates: {
      canonical: generateCanonical("/about/"),
    },
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
