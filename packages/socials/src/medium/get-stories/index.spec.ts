import { getMediumStories } from ".";

describe("getMediumStories", () => {
  it("should parse the fixture", async () => {
    const response = await getMediumStories();
    expect(Object.values(response.series)).toHaveLength(2);
  });
});
