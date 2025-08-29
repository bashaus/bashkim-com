import { getCaseStudyPath } from "./case-study";

describe("libraries/app/navigation", () => {
  describe("getCaseStudyPath()", () => {
    it("should return path", () => {
      expect(getCaseStudyPath({ caseStudySlug: "lorem-ipsum" })).toBe(
        "/portfolio/lorem-ipsum",
      );
    });
  });
});
