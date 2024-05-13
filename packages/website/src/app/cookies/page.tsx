import { CookiesPageLockup } from "../../domains/cookies-page/components/CookiesPageLockup";
import { generateCanonical } from "../../libraries/app/generateCanonical";

export const metadata = {
  title: "Cookie policy",
  description: "How your personal information is used on this website",
  alternates: {
    canonical: generateCanonical("/cookies/"),
  },
};

const CookiesPage = () => <CookiesPageLockup />;

export default CookiesPage;
