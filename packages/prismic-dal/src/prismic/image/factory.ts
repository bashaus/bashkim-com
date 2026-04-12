import { faker } from "@faker-js/faker";
import { FilledImageFieldImage } from "@prismicio/client";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

export const prismicImageFactory = Factory.define<FilledImageFieldImage>(
  ({ params }) => {
    const { alt: _alt, dimensions = {} } = params;

    const alt = _alt ?? faker.lorem.words(3);
    const { width = 1024, height = 768 } = dimensions;

    return {
      id: faker.string.alphanumeric(16),
      dimensions: {
        width,
        height,
      },
      edit: {
        x: 0,
        y: 0,
        zoom: 1,
        background: "transparent",
      },
      alt,
      copyright: null,
      url: placeholderImage({ width, height, text: alt }),
    };
  },
);

export const prismicImageIconFactory = prismicImageFactory.params({
  alt: "icon",
  dimensions: {
    width: 300,
    height: 300,
  },
});

export const prismicImagePosterFactory = prismicImageFactory.params({
  alt: "poster",
  dimensions: {
    width: 640,
    height: 360,
  },
});

export const prismicImageHeaderDesktopFactory = prismicImageFactory.params({
  alt: "header desktop",
  dimensions: {
    width: 1980,
    height: 400,
  },
});

export const prismicImageHeaderMobileFactory = prismicImageFactory.params({
  alt: "header mobile",
  dimensions: {
    width: 1000,
    height: 800,
  },
});
