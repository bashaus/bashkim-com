import { getAboutPath } from "./about";

describe("libraries/app/navigation", () => {
  describe("getAboutPath()", () => {
    it("should return path", () => {
      expect(getAboutPath()).toBe("/about");
    });
  });
});
