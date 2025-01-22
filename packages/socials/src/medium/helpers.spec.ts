import { matchMultipartTitle } from "./helpers";

describe("helpers", () => {
  it("should match [1/2]", () => {
    const parts = matchMultipartTitle("[1/2] Part one of two");
    expect(parts.multipart).not.toBeUndefined();
    expect(parts.multipart?.part).toEqual("1");
    expect(parts.multipart?.parts).toEqual("2");
    expect(parts.title).toEqual("Part one of two");
  });

  it("should match [3/4]", () => {
    const parts = matchMultipartTitle("[3/4] Part three of four");
    expect(parts.multipart).not.toBeUndefined();
    expect(parts.multipart?.part).toEqual("3");
    expect(parts.multipart?.parts).toEqual("4");
    expect(parts.title).toEqual("Part three of four");
  });

  it("should handle a single part", () => {
    const parts = matchMultipartTitle("Single part");
    expect(parts.multipart).toBeUndefined();
    expect(parts.title).toEqual("Single part");
  });
});
