import { getPortfolioPath } from "./portfolio";

describe("libraries/app/navigation", () => {
  describe("getPortfolioPath()", () => {
    it("should return path", () => {
      expect(getPortfolioPath()).toBe("/portfolio");
    });
  });
});
