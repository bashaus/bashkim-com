import { Factory } from "fishery";

import { prismicImageFactory } from "../../factories";
import {
  CaptionedScreenshotsSliceTypeFieldFragment,
  CaptionedScreenshotsSliceTypeFragment,
  CaptionedScreenshotsSliceTypePrimaryFragment,
} from "../../gql/graphql";
import { prismicHeading3Factory } from "../../prismic/heading/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const captionedScreenshotsSliceFieldFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFieldFragment>(
    ({ associations }) => {
      return {
        __typename: "Case_studyBodyCaptionedscreenshotsslicetypeFields",
        captioned_screenshots_slice_type_images:
          associations.captioned_screenshots_slice_type_images ??
          prismicImageFactory.build({
            dimensions: { width: 320, height: 1362 },
          }),
      };
    },
  );

export const captionedScreenshotsSlicePrimaryFactory =
  Factory.define<CaptionedScreenshotsSliceTypePrimaryFragment>(
    ({ associations }) => {
      return {
        __typename: "Case_studyBodyCaptionedscreenshotsslicetypePrimary",
        captioned_screenshots_slice_type_caption:
          associations.captioned_screenshots_slice_type_caption ?? [
            prismicHeading3Factory.build(),
            prismicParagraphFactory.build(),
          ],
      };
    },
  );

export const captionedScreenshotsSliceFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFragment>(({ associations }) => {
    return {
      __typename: "Case_studyBodyCaptionedscreenshotsslicetype",
      type: "CaptionedScreenshotsSliceType",
      primary:
        associations.primary ?? captionedScreenshotsSlicePrimaryFactory.build(),
      fields:
        associations.fields ??
        Object.entries(breakpoints).map(([alt, dimensions]) =>
          captionedScreenshotsSliceFieldFactory.build(undefined, {
            associations: {
              captioned_screenshots_slice_type_images:
                prismicImageFactory.build({ alt, dimensions }),
            },
          }),
        ),
    };
  });

const breakpoints = {
  "Mobile Portrait": { width: 320, height: 1362 },
  "Mobile Landscape": { width: 480, height: 1160 },
  "Tablet Portrait": { width: 768, height: 1135 },
  "Tablet Landscape": { width: 1024, height: 650 },
  "Desktop Narrow": { width: 1280, height: 800 },
  "Desktop Wide": { width: 1440, height: 800 },
};
