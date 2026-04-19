import { getStackOverflowPostsFactory } from "./factory";
import { getStackOverflowPostsSchema } from "./schema";

describe("getStackOverflowPostsSchema", () => {
  it("should parse the fixture", () => {
    const fixture = getStackOverflowPostsFactory.build();
    expect(fixture).toMatchSchema(getStackOverflowPostsSchema);
  });
});
