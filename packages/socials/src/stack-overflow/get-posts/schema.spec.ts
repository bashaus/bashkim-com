import fixture from "./fixture.json";
import { getStackOverflowPostsResponseSchema } from "./schema";

describe("getStackOverflowPostsResponseSchema", () => {
  it("should parse the fixture", async () => {
    const response = getStackOverflowPostsResponseSchema.safeParse(fixture);
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
  });
});
