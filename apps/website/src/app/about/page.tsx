import { generateCanonical } from "../../libraries/app/generateCanonical";
import { AboutPageLockup } from "../../lockups/AboutPage";

export const metadata = {
  title: "About",
  description: "Information on the work history of Bashkim Isai",
  keywords: ["bashkim isai", "creative technologist", "london"],
  alternates: {
    canonical: generateCanonical("/about/"),
  },
};

export default function AboutPage() {
  return <AboutPageLockup />;
}