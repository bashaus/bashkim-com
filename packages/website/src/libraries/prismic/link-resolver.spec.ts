import PrismicLinkResolver from "./link-resolver";

describe("Prismic/Helpers/Link", () => {
  describe("#PrismicLinkResolver", () => {
    it("should handle case_study", () => {
      expect(
        PrismicLinkResolver({ type: "case_study", uid: "item-slug" }),
      ).toEqual("/portfolio/item-slug");

      expect(
        PrismicLinkResolver({ type: "case_study", uid: "case-study-slug" }),
      ).toEqual("/portfolio/case-study-slug");
    });

    it("should throw error on unknown", () => {
      expect(() =>
        PrismicLinkResolver({ type: "unknown", uid: "case-study-slug" }),
      ).toThrow();
    });
  });
});
