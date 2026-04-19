import { stackOverflowUserFactory } from "./factory";
import { stackOverflowUserSchema } from "./schema";

describe("stackOverflowUserSchema", () => {
  it("should parse the fixture", () => {
    const fixture = stackOverflowUserFactory.build();
    expect(fixture).toMatchSchema(stackOverflowUserSchema);
  });
});
