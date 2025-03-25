import type { CaptionedScreenshotsSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const captionedScreenshotsSliceFactory =
  Factory.define<CaptionedScreenshotsSliceTypeFragment>(() => {
    return {
      type: "CaptionedScreenshotsSliceType",
      label: null,
      primary: {
        captioned_screenshots_slice_type_caption: [
          {
            type: "heading3",
            text: "Captioned screenshots",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Example of the CaptionedScreenshotsSliceType.",
            spans: [],
          },
        ],
      },
      fields: [
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 320,
              height: 1362,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 320,
              height: 1362,
              text: "Mobile Portrait",
            }),
          },
        },
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 480,
              height: 1160,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 480,
              height: 1160,
              text: "Mobile Landscape",
            }),
          },
        },
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 768,
              height: 1135,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 768,
              height: 1135,
              text: "Tablet Portrait",
            }),
          },
        },
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 1024,
              height: 650,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 1024,
              height: 650,
              text: "Tablet Landscape",
            }),
          },
        },
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 1280,
              height: 800,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 1280,
              height: 800,
              text: "Desktop Narrow",
            }),
          },
        },
        {
          captioned_screenshots_slice_type_images: {
            dimensions: {
              width: 1440,
              height: 800,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 1440,
              height: 800,
              text: "Desktop Wide",
            }),
          },
        },
      ],
    };
  });

export default captionedScreenshotsSliceFactory;
