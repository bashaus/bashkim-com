import { stackOverflowOwnerFactory } from "./factory";
import { stackOverflowOwnerSchema } from "./schema";

describe("stackOverflowOwnerSchema", () => {
  it("should parse the fixture", () => {
    const fixture = stackOverflowOwnerFactory.build();
    expect(fixture).toMatchSchema(stackOverflowOwnerSchema);
  });
});
