import type { CaptionedScreenshotsSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import captionedScreenshotsSliceFieldFactory from "./captionedScreenshotsSliceFieldFactory";
import captionedScreenshotsSlicePrimaryFactory from "./captionedScreenshotsSlicePrimaryFactory";

const captionedScreenshotsSliceFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFragment>(() => {
    return {
      type: "CaptionedScreenshotsSliceType",
      label: null,
      primary: captionedScreenshotsSlicePrimaryFactory.build(),
      fields: [
        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 320, height: 1362 },
            alt: "Mobile Portrait",
          },
        }),

        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 480, height: 1160 },
            alt: "Mobile Landscape",
          },
        }),

        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 768, height: 1135 },
            alt: "Tablet Portrait",
          },
        }),

        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 1024, height: 650 },
            alt: "Tablet Landscape",
          },
        }),

        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 1280, height: 800 },
            alt: "Desktop Narrow",
          },
        }),

        captionedScreenshotsSliceFieldFactory.build({
          captioned_screenshots_slice_type_images: {
            dimensions: { width: 1440, height: 800 },
            alt: "Desktop Wide",
          },
        }),
      ],
    };
  });

export default captionedScreenshotsSliceFactory;
