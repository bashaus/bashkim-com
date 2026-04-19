import { getStackOverflowPosts } from ".";

describe("getStackOverflowPosts", () => {
  it("should parse the fixture", async () => {
    const response = await getStackOverflowPosts();
    expect(response).toHaveLength(10);
  });
});
