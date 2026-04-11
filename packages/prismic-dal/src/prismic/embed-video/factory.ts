import { faker } from "@faker-js/faker";
import { OEmbedExtra, VideoOEmbed } from "@prismicio/client";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const prismicEmbedVideoFactory = Factory.define<VideoOEmbed & OEmbedExtra>(
  (opts) => {
    const { params } = opts;
    const thumbnailWidth = params.thumbnail_width ?? 295;
    const thumbnailHeight = params.thumbnail_height ?? 166;
    const width = params.width ?? 459;
    const height = params.height ?? 344;

    return {
      type: "video",
      version: "1.0",
      title: faker.lorem.words(3),
      author_name: faker.person.fullName(),
      author_url: faker.internet.url(),
      thumbnail_width: thumbnailWidth,
      thumbnail_height: thumbnailHeight,
      thumbnail_url: placeholderImage({
        width: thumbnailWidth,
        height: thumbnailHeight,
        text: "Thumbnail",
      }),
      html: "",
      width,
      height,
    };
  },
);

export const prismicEmbedYouTubeFactory = prismicEmbedVideoFactory.params({
  provider_name: "YouTube",
  provider_url: "https://www.youtube.com/",
  embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
  html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  thumbnail_width: 480,
  thumbnail_height: 360,
  width: 459,
  height: 344,
});

export const prismicEmbedVimeoFactory = prismicEmbedVideoFactory.params({
  provider_name: "Vimeo",
  provider_url: "https://vimeo.com/",
  embed_url: "https://vimeo.com/1110883223",
  html: '<iframe src="https://player.vimeo.com/video/1110883223?app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="#LookingForYou - Public video"></iframe>',
  thumbnail_width: 295,
  thumbnail_height: 166,
  width: 426,
  height: 240,

  is_plus: "0",
  account_type: "free",
  duration: 122,
  description: "",
  thumbnail_url_with_play_button: placeholderImage({
    width: 295,
    height: 166,
    text: "Play",
  }),
  upload_date: "2025-08-18 04:56:21",
  video_id: 1110883223,
  uri: "/videos/1110883223",
});
