import linkResolver from "./link-resolver";

describe("libraries/prismic#linkResolver", () => {
  it("should handle case_study", () => {
    expect(
      linkResolver({
        id: "",
        lang: "en",
        type: "case_study",
        link_type: "Document",
        uid: "item-slug",
        tags: [],
      }),
    ).toEqual("/portfolio/item-slug");

    expect(
      linkResolver({
        id: "",
        lang: "en",
        type: "case_study",
        link_type: "Document",
        uid: "case-study-slug",
        tags: [],
      }),
    ).toEqual("/portfolio/case-study-slug");
  });

  it("should return null on unknown", () => {
    expect(
      linkResolver({
        id: "",
        lang: "en",
        type: "unknown",
        link_type: "Document",
        uid: "item-slug",
        tags: [],
      }),
    ).toBeNull();
  });
});
