import {
  getSocialsGitHubPath,
  getSocialsLinkedInPath,
  getSocialsMediumPath,
  getSocialsPath,
  getSocialsStackOverflowPath,
} from "./socials";

describe("libraries/app/navigation", () => {
  describe("getSocialsPath()", () => {
    it("should return path", () => {
      expect(getSocialsPath()).toBe("/socials");
    });
  });

  describe("getSocialsGitHubPath()", () => {
    it("should return path", () => {
      expect(getSocialsGitHubPath()).toBe("/socials/github");
    });
  });

  describe("getSocialsMediumPath()", () => {
    it("should return path", () => {
      expect(getSocialsMediumPath()).toBe("/socials/medium");
    });
  });

  describe("getSocialsLinkedInPath()", () => {
    it("should return path", () => {
      expect(getSocialsLinkedInPath()).toBe("/socials/linked-in");
    });
  });

  describe("getSocialsStackOverflowPath()", () => {
    it("should return path", () => {
      expect(getSocialsStackOverflowPath()).toBe("/socials/stack-overflow");
    });
  });
});
