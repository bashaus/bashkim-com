import {
  getSocialsGitHubPath,
  getSocialsLinkedInPath,
  getSocialsMediumPath,
  getSocialsPath,
  getSocialsStackOverflowPath,
} from "./socials";

describe("getSocialsPath()", () => {
  it("should return path", () => {
    const path = getSocialsPath();
    expect(path).toBe("/socials");
  });
});

describe("getSocialsGitHubPath()", () => {
  it("should return path", () => {
    const path = getSocialsGitHubPath();
    expect(path).toBe("/socials/github");
  });
});

describe("getSocialsMediumPath()", () => {
  it("should return path", () => {
    const path = getSocialsMediumPath();
    expect(path).toBe("/socials/medium");
  });
});

describe("getSocialsLinkedInPath()", () => {
  it("should return path", () => {
    const path = getSocialsLinkedInPath();
    expect(path).toBe("/socials/linked-in");
  });
});

describe("getSocialsStackOverflowPath()", () => {
  it("should return path", () => {
    const path = getSocialsStackOverflowPath();
    expect(path).toBe("/socials/stack-overflow");
  });
});
