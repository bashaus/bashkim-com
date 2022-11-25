import { PrismicLinkResolver } from "./PrismicLinkResolver";

describe("Prismic/Helpers/Link", () => {
  describe("#PrismicLinkResolver", () => {
    it("converts case_study", () => {
      expect(
        PrismicLinkResolver({ type: "case_study", uid: "item-slug" })
      ).toEqual("/portfolio/item-slug/");

      expect(
        PrismicLinkResolver({ type: "case_study", uid: "case-study-slug" })
      ).toEqual("/portfolio/case-study-slug/");
    });
  });
});
