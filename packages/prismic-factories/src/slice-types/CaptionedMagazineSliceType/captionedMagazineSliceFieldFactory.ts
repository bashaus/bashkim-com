import type { CaptionedMagazineSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicImageFactory from "../../prismic/prismicImageFactory";

const captionedMagazineSliceFieldFactory =
  Factory.define<CaptionedMagazineSliceTypeFieldFragment>((opts) => {
    return {
      captioned_magazine_slice_type_images: prismicImageFactory.build({
        dimensions: { width: 720, height: 1016 },
        alt: `Page ${opts.sequence}`,
      }),
    };
  });

export default captionedMagazineSliceFieldFactory;
