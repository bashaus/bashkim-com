import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

type PrismicImage = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string | null;
  copyright: string | null;
  url: string;
};

const prismicImageFactory = Factory.define<PrismicImage, { title: string }>(
  (opts) => {
    const { alt = faker.lorem.words(3) } = opts.params;
    const { width = 1024, height = 768 } = opts.params.dimensions ?? {};

    return {
      dimensions: {
        width,
        height,
      },
      alt: faker.lorem.words(5),
      copyright: null,
      url: placeholderImage({ width, height, text: alt ?? "" }),
    };
  },
);

export default prismicImageFactory;
