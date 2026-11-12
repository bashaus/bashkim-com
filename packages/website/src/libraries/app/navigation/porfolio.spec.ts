import { Locale } from "@/i18n/locale/locale";

import { getCaseStudyPath, getPortfolioPath } from "./portfolio";

describe("getPortfolioPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getPortfolioPath({ locale });
    expect(path).toBe("/en/portfolio");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getPortfolioPath({ locale });
    expect(path).toBe("/es/portfolio");
  });
});

describe("getCaseStudyPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getCaseStudyPath({ locale, caseStudySlug: "lorem-ipsum" });
    expect(path).toBe("/en/portfolio/lorem-ipsum");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getCaseStudyPath({ locale, caseStudySlug: "lorem-ipsum" });
    expect(path).toBe("/es/portfolio/lorem-ipsum");
  });
});
