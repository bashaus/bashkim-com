import { generateCanonical } from "../../libraries/app/generateCanonical";
import { CookiesPageLockup } from "../../lockups/CookiesPage";

export const metadata = {
  title: "Cookie policy",
  description: "How your personal information is used on this website",
  alternates: {
    canonical: generateCanonical("/cookies/"),
  },
};

export default function CookiesPage() {
  return <CookiesPageLockup />;
}
