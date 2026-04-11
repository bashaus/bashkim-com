import { Factory } from "fishery";

import {
  CaptionedMagazineSliceTypeFieldFragment,
  CaptionedMagazineSliceTypeFragment,
  CaptionedMagazineSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicImageFactory } from "../../prismic/image/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const captionedMagazineSliceFieldFactory =
  Factory.define<CaptionedMagazineSliceTypeFieldFragment>((opts) => {
    return {
      __typename: "Case_studyBodyCaptionedmagazineslicetypeFields",
      captioned_magazine_slice_type_images: prismicImageFactory.build({
        dimensions: { width: 720, height: 1016 },
        alt: `Page ${opts.sequence}`,
      }),
    };
  });

export const captionedMagazineSlicePrimaryFactory =
  Factory.define<CaptionedMagazineSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedmagazineslicetypePrimary",
      captioned_magazine_slice_type_caption: [
        prismicHeading3Factory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });

export const captionedMagazineSliceFactory =
  Factory.define<CaptionedMagazineSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedmagazineslicetype",
      type: "CaptionedMagazineSliceType",
      primary: captionedMagazineSlicePrimaryFactory.build(),
      fields: captionedMagazineSliceFieldFactory.buildList(4),
    };
  });
