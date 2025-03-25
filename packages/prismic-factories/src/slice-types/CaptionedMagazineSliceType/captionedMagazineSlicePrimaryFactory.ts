import type { CaptionedMagazineSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const captionedMagazineSlicePrimaryFactory =
  Factory.define<CaptionedMagazineSliceTypePrimaryFragment>(() => {
    return {
      captioned_magazine_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });

export default captionedMagazineSlicePrimaryFactory;
