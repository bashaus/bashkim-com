import type { FullTextSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const fullTextSlicePrimaryFactory =
  Factory.define<FullTextSliceTypePrimaryFragment>(() => {
    return {
      full_text_slice_type_body: [
        ...prismicHeadingFactory.buildList(1),
        ...prismicParagraphFactory.buildList(5),
      ],
    };
  });

export default fullTextSlicePrimaryFactory;
