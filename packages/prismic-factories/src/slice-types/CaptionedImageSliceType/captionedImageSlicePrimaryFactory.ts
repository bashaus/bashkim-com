import type { CaptionedImageSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicImageFactory from "../../prismic/prismicImageFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const captionedImageSlicePrimaryFactory =
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

export default captionedImageSlicePrimaryFactory;
