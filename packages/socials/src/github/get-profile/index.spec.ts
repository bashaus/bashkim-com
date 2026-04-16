import { getGitHubProfile } from ".";

describe("getGitHubProfile", () => {
  it("should parse the fixture", async () => {
    const response = await getGitHubProfile();
    expect(response.repositoryCount).toBe(10);
    expect(response.pinnedItems).toHaveLength(1);
  });
});
