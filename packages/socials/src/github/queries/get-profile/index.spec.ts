import { getGitHubProfile } from ".";

describe("getGitHubProfile", () => {
  it("should parse the fixture", async () => {
    const response = await getGitHubProfile();
    expect(response).toHaveProperty("repositoryCount");
    expect(response).toHaveProperty("pinnedItems");
  });
});
