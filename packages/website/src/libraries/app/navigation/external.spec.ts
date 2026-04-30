import {
  getExternalGitHubRepositoryUrl,
  getExternalGitHubUrl,
  getExternalLinkedInUrl,
  getExternalMediumUrl,
} from "./external";

describe("getExternalGitHubUrl", () => {
  it("should contain username", () => {
    const path = getExternalGitHubUrl();
    expect(path).toContain("bashaus");
  });
});

describe("getExternalGitHubRepositoryUrl", () => {
  it("should contain username", () => {
    const path = getExternalGitHubRepositoryUrl();
    expect(path).toContain("bashaus");
  });

  it("should contain repository name", () => {
    const path = getExternalGitHubRepositoryUrl();
    expect(path).toContain("bashkim-com");
  });
});

describe("getExternalMediumUrl", () => {
  it("should contain username", () => {
    const path = getExternalMediumUrl();
    expect(path).toContain("bashaus");
  });
});

describe("getExternalLinkedInUrl", () => {
  it("should contain username", () => {
    const path = getExternalLinkedInUrl();
    expect(path).toContain("bashaus");
  });
});
