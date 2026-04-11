import { Factory } from "fishery";

import {
  CaptionedImageSliceTypeFragment,
  CaptionedImageSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicImageFactory } from "../../prismic/image/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const captionedImageSlicePrimaryFactory =
  Factory.define<CaptionedImageSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedimageslicetypePrimary",
      captioned_image_slice_type_caption: [
        prismicHeading3Factory.build(),
        prismicParagraphFactory.build(),
      ],
      captioned_image_slice_type_image: prismicImageFactory.build({
        dimensions: { width: 1024, height: 650 },
      }),
      captioned_image_slice_type_image_blurhash: "",
    };
  });

export const captionedImageSliceFactory =
  Factory.define<CaptionedImageSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedimageslicetype",
      type: "CaptionedImageSliceType",
      primary: captionedImageSlicePrimaryFactory.build(),
    };
  });

export default captionedImageSliceFactory;
