import { AboutPageLockup } from "../../domains/about-page/components/AboutPageLockup";
import { generateCanonical } from "../../libraries/app/generateCanonical";

export const metadata = {
  title: "About",
  description: "Information on the work history of Bashkim Isai",
  keywords: ["bashkim isai", "creative technologist", "digital nomad"],
  alternates: {
    canonical: generateCanonical("/about/"),
  },
};

const AboutPage = () => <AboutPageLockup />;

export default AboutPage;
