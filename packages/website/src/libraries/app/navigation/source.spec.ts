import { getSourcePath } from "./source";

describe("libraries/app/navigation", () => {
  describe("getSourcePath()", () => {
    it("should return path", () => {
      expect(getSourcePath()).toBe("/source");
    });
  });
});
