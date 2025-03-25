import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

type PrismicVideo = {
  thumbnail_url: string;
  thumbnail_height: number;
  provider_url: string;
  html: string;
  type: string;
  version: string;
  height: number;
  author_name: string;
  provider_name: string;
  width: number;
  title: string;
  thumbnail_width: number;
  author_url: string;
  embed_url: string;
};

const prismicVideoFactory = Factory.define<PrismicVideo, { title: string }>(
  (opts) => {
    const {
      thumbnail_height: thumbnailWidth = 480,
      thumbnail_width: thumbnailHeight = 360,
    } = opts.params;

    return {
      thumbnail_url: placeholderImage({
        width: thumbnailWidth,
        height: thumbnailHeight,
        text: "Thumbnail",
      }),
      thumbnail_height: thumbnailHeight,
      provider_url: "https://www.youtube.com/",
      html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      type: "video",
      version: "1.0",
      height: (thumbnailWidth / 16) * 9,
      author_name: faker.person.fullName(),
      provider_name: "YouTube",
      width: thumbnailWidth,
      title: faker.lorem.words(3),
      thumbnail_width: thumbnailWidth,
      author_url: faker.internet.url(),
      embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
    };
  },
);

export default prismicVideoFactory;
