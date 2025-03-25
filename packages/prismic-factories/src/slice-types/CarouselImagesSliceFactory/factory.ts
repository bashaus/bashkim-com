import type { CarouselImagesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const carouselImagesSliceFactory =
  Factory.define<CarouselImagesSliceTypeFragment>(() => {
    return {
      type: "CarouselImagesSliceType",
      label: null,
      fields: [
        {
          carousel_images_slice_type_caption: [
            {
              type: "heading3",
              text: "First slide",
              spans: [],
            },
            {
              type: "paragraph",
              text: "This is the first slide",
              spans: [],
            },
          ],
          carousel_images_slice_type_image: {
            dimensions: {
              width: 600,
              height: 400,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({ width: 600, height: 400, text: "Image 1" }),
          },
        },
        {
          carousel_images_slice_type_caption: [
            {
              type: "heading3",
              text: "Second slide",
              spans: [],
            },
            {
              type: "paragraph",
              text: "This is the second slide",
              spans: [],
            },
          ],
          carousel_images_slice_type_image: {
            dimensions: {
              width: 600,
              height: 400,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({ width: 600, height: 400, text: "Image 2" }),
          },
        },
      ],
      primary: {},
    };
  });

export default carouselImagesSliceFactory;
