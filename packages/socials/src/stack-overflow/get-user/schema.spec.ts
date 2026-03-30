import fixture from "./fixture.json";
import { getStackOverflowUserResponseSchema } from "./schema";

describe("getStackOverflowUserResponseSchema", () => {
  it("should parse the fixture", async () => {
    const response = getStackOverflowUserResponseSchema.safeParse(fixture);
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
  });
});
