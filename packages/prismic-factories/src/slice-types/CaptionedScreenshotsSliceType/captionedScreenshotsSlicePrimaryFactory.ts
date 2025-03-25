import type { CaptionedScreenshotsSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const captionedScreenshotsSlicePrimaryFactory =
  Factory.define<CaptionedScreenshotsSliceTypePrimaryFragment>(() => {
    return {
      captioned_screenshots_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });

export default captionedScreenshotsSlicePrimaryFactory;
