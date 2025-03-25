import type { CaptionedImageSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const captionedImageSliceFactory =
  Factory.define<CaptionedImageSliceTypeFragment>(() => {
    return {
      type: "CaptionedImageSliceType",
      label: null,
      primary: {
        captioned_image_slice_type_caption: [
          {
            type: "heading3",
            text: "Captioned image",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Example of the CaptionedImageSliceType.",
            spans: [],
          },
        ],
        captioned_image_slice_type_image: {
          dimensions: {
            width: 1024,
            height: 650,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({ width: 1024, height: 650, text: "Image" }),
        },
        captioned_image_slice_type_image_blurhash:
          ";2NTzY%M_3t7Rj%MIUt7t7?bayM{ofofWBofofWB~qay9FofofWBxuofRjRjof-;RjRjt7RjWBof9Fay-;ofayWBM{ofof~qWBD%t7t7WBt7fQWBxuofRjRjWBt7t7WBayofj[%MayWBWBWBoffQ",
      },
    };
  });

export default captionedImageSliceFactory;
