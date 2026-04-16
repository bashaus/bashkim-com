import fixture from "./fixture.json";
import { getStackOverflowUserSchema } from "./schema";

describe("getStackOverflowUserResponseSchema", () => {
  it("should parse the fixture", async () => {
    const response = getStackOverflowUserSchema.safeParse(fixture);
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
  });
});
