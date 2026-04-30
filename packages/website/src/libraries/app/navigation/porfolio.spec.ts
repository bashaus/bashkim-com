import { getCaseStudyPath, getPortfolioPath } from "./portfolio";

describe("getPortfolioPath", () => {
  it("should return path", () => {
    const path = getPortfolioPath();
    expect(path).toBe("/portfolio");
  });
});

describe("getCaseStudyPath", () => {
  it("should return path", () => {
    const path = getCaseStudyPath({ caseStudySlug: "lorem-ipsum" });
    expect(path).toBe("/portfolio/lorem-ipsum");
  });
});
