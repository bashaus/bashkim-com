import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import { CaptionedScreenshotsSliceTypeFieldFragment } from "../../gql/graphql";

export const captionedScreenshotsSliceFieldFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFieldFragment>((opts) => {
    const { width = 320, height = 1362 } =
      opts.params.captioned_screenshots_slice_type_images?.dimensions ?? {};

    return {
      captioned_screenshots_slice_type_images: {
        dimensions: {
          width,
          height,
        },
        alt: null,
        copyright: null,
        url: placeholderImage({
          width: 320,
          height: 1362,
          text: `${width} x ${height}`,
        }),
      },
    };
  });
