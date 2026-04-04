import { Factory } from "fishery";

import { CaptionedMagazineSliceTypeFieldFragment } from "../../gql/graphql";
import { prismicImageFactory } from "../../prismic/prismic-image-factory";

export const captionedMagazineSliceFieldFactory =
  Factory.define<CaptionedMagazineSliceTypeFieldFragment>((opts) => {
    return {
      captioned_magazine_slice_type_images: prismicImageFactory.build({
        dimensions: { width: 720, height: 1016 },
        alt: `Page ${opts.sequence}`,
      }),
    };
  });
