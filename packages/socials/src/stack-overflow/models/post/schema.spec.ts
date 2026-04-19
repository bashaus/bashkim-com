import { stackOverflowPostFactory } from "./factory";
import { stackOverflowPostSchema } from "./schema";

describe("stackOverflowPostSchema", () => {
  it("should parse the fixture", () => {
    const fixture = stackOverflowPostFactory.build();
    expect(fixture).toMatchSchema(stackOverflowPostSchema);
  });
});
