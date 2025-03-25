import type { CarouselPhonesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const carouselPhonesSliceFactory =
  Factory.define<CarouselPhonesSliceTypeFragment>(() => {
    return {
      type: "CarouselPhonesSliceType",
      label: null,
      fields: [
        {
          carousel_phones_slice_type_device_type: "SMARTPHONE",
          carousel_phones_slice_type_caption: [
            {
              type: "heading3",
              text: "First phone",
              spans: [],
            },
            {
              type: "paragraph",
              text: "This is the first phone",
              spans: [],
            },
          ],
          carousel_phones_slice_type_image: {
            dimensions: {
              width: 600,
              height: 1200,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 600,
              height: 1200,
              text: "Image 1",
            }),
          },
        },
        {
          carousel_phones_slice_type_device_type: "SMARTPHONE",
          carousel_phones_slice_type_caption: [
            {
              type: "heading3",
              text: "Second phone",
              spans: [],
            },
            {
              type: "paragraph",
              text: "This is the second phone",
              spans: [],
            },
          ],
          carousel_phones_slice_type_image: {
            dimensions: {
              width: 600,
              height: 1200,
            },
            alt: null,
            copyright: null,
            url: placeholderImage({
              width: 600,
              height: 1200,
              text: "Image 2",
            }),
          },
        },
      ],
    };
  });

export default carouselPhonesSliceFactory;
