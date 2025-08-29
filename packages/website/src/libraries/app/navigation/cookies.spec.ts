import { getCookiesPath } from "./cookies";

describe("libraries/app/navigation", () => {
  describe("getCookiesPath()", () => {
    it("should return path", () => {
      expect(getCookiesPath()).toBe("/cookies");
    });
  });
});
