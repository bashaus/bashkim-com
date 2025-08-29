import { getHomePath } from "./home";

describe("libraries/app/navigation", () => {
  describe("getHomePath()", () => {
    it("should return path", () => {
      expect(getHomePath()).toBe("/");
    });
  });
});
