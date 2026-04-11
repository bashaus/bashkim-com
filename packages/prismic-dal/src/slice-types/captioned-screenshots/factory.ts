import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

import {
  CaptionedScreenshotsSliceTypeFieldFragment,
  CaptionedScreenshotsSliceTypeFragment,
  CaptionedScreenshotsSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const captionedScreenshotsSliceFieldFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFieldFragment>((opts) => {
    const { width = 320, height = 1362 } =
      opts.params.captioned_screenshots_slice_type_images?.dimensions ?? {};

    return {
      __typename: "Case_studyBodyCaptionedscreenshotsslicetypeFields",
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

export const captionedScreenshotsSlicePrimaryFactory =
  Factory.define<CaptionedScreenshotsSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedscreenshotsslicetypePrimary",
      captioned_screenshots_slice_type_caption: [
        prismicHeading3Factory.build(),
        prismicParagraphFactory.build(),
      ],
    };
  });

export const captionedScreenshotsSliceFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyBodyCaptionedscreenshotsslicetype",
      type: "CaptionedScreenshotsSliceType",
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
