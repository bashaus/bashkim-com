import { Factory } from "fishery";

import { CaptionedScreenshotsSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const captionedScreenshotsSlicePrimaryFactory =
  Factory.define<CaptionedScreenshotsSliceTypePrimaryFragment>(() => {
    return {
      captioned_screenshots_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });
