import { extractRssImage } from ".";

describe("extractRssImage", () => {
  it("should return undefined with no image", () => {
    const html = "<h1>Article</h1>";
    const image = extractRssImage(html);
    expect(image).toBeUndefined();
  });

  it("should return an image", () => {
    const html = '<h1>Article</h1><img src="image.png" alt="Thumbnail" />';
    const image = extractRssImage(html);
    expect(image).not.toBeUndefined();
    expect(image?.src).toBe("image.png");
    expect(image?.alt).toBe("Thumbnail");
  });

  it("should return undefined with no src attribute", () => {
    const html = "<h1>Article</h1><img />";
    const image = extractRssImage(html);
    expect(image).toBeUndefined();
  });

  it("should return an empty string with no alt attribute", () => {
    const html = '<h1>Article</h1><img src="image.png" />';
    const image = extractRssImage(html);
    expect(image).not.toBeUndefined();
    expect(image?.src).toBe("image.png");
    expect(image?.alt).toBe("");
  });
});
