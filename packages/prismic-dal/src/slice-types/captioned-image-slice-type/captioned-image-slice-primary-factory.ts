import { Factory } from "fishery";

import { CaptionedImageSliceTypePrimaryFragment } from "../../gql/graphql";
import { prismicHeadingFactory } from "../../prismic/prismic-heading-factory";
import { prismicImageFactory } from "../../prismic/prismic-image-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";

export const captionedImageSlicePrimaryFactory =
  Factory.define<CaptionedImageSliceTypePrimaryFragment>(() => {
    return {
      captioned_image_slice_type_caption: [
        prismicHeadingFactory.build(),
        prismicParagraphFactory.build(),
      ],
      captioned_image_slice_type_image: prismicImageFactory.build({
        dimensions: { width: 1024, height: 650 },
      }),
      captioned_image_slice_type_image_blurhash: "",
    };
  });
