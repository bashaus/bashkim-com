import fixture from "./fixture.json";
import { getStackOverflowPostsSchema } from "./schema";

describe("getStackOverflowPostsResponseSchema", () => {
  it("should parse the fixture", async () => {
    const response = getStackOverflowPostsSchema.safeParse(fixture);
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
  });
});
