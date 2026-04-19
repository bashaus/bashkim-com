import { getStackOverflowUserFactory } from "./factory";
import { getStackOverflowUserSchema } from "./schema";

describe("getStackOverflowUserSchema", () => {
  it("should parse the fixture", () => {
    const fixture = getStackOverflowUserFactory.build();
    expect(fixture).toMatchSchema(getStackOverflowUserSchema);
  });
});
