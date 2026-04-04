import { Factory } from "fishery";

import { CaptionedMagazineSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const captionedMagazineSlicePrimaryFactory =
  Factory.define<CaptionedMagazineSliceTypePrimaryFragment>(() => {
    return {
      captioned_magazine_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });
