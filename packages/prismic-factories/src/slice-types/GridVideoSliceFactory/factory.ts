import type { GridVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { placeholderImage } from "placeholder-image-data-url-svg";

const gridVideoSliceFactory = Factory.define<GridVideoSliceTypeFragment>(() => {
  return {
    type: "GridVideoSliceType",
    label: null,
    fields: [
      {
        grid_video_slice_type_description: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
        grid_video_slice_type_poster: {
          dimensions: {
            width: 400,
            height: 300,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({ width: 400, height: 300, text: "Video 1" }),
        },
        grid_video_slice_type_video: {
          thumbnail_url: placeholderImage({
            width: 480,
            height: 360,
            text: "Thumbnail",
          }),
          thumbnail_height: 360,
          provider_url: "https://www.youtube.com/",
          html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          type: "video",
          version: "1.0",
          height: 270,
          author_name: faker.person.fullName(),
          provider_name: "YouTube",
          width: 480,
          title: faker.lorem.words(3),
          thumbnail_width: 480,
          author_url: faker.internet.url(),
          embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
        },
      },
      {
        grid_video_slice_type_description: [
          {
            type: "paragraph",
            text: "Dolor sit amet, consectetur adipiscing elit. Suspendisse.",
            spans: [],
          },
        ],
        grid_video_slice_type_poster: {
          dimensions: {
            width: 400,
            height: 300,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({ width: 400, height: 300, text: "Video 2" }),
        },
        grid_video_slice_type_video: {
          thumbnail_url: placeholderImage({
            width: 480,
            height: 360,
            text: "Thumbnail",
          }),
          thumbnail_height: 360,
          provider_url: "https://www.youtube.com/",
          html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          type: "video",
          version: "1.0",
          height: 270,
          author_name: faker.person.fullName(),
          provider_name: "YouTube",
          width: 480,
          title: faker.lorem.words(3),
          thumbnail_width: 480,
          author_url: faker.internet.url(),
          embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
        },
      },
      {
        grid_video_slice_type_description: [
          {
            type: "paragraph",
            text: "Dolor sit amet, consectetur adipiscing elit. Suspendisse.",
            spans: [],
          },
        ],
        grid_video_slice_type_poster: {
          dimensions: {
            width: 400,
            height: 300,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({ width: 400, height: 300, text: "Video 3" }),
        },
        grid_video_slice_type_video: {
          thumbnail_url: placeholderImage({
            width: 480,
            height: 360,
            text: "Thumbnail",
          }),
          thumbnail_height: 360,
          provider_url: "https://www.youtube.com/",
          html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          type: "video",
          version: "1.0",
          height: 270,
          author_name: faker.person.fullName(),
          provider_name: "YouTube",
          width: 480,
          title: faker.lorem.words(3),
          thumbnail_width: 480,
          author_url: faker.internet.url(),
          embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
        },
      },
      {
        grid_video_slice_type_description: [
          {
            type: "paragraph",
            text: "Dolor sit amet, consectetur adipiscing elit. Suspendisse.",
            spans: [],
          },
        ],
        grid_video_slice_type_poster: {
          dimensions: {
            width: 400,
            height: 300,
          },
          alt: null,
          copyright: null,
          url: placeholderImage({ width: 400, height: 300, text: "Video 3" }),
        },
        grid_video_slice_type_video: {
          thumbnail_url: placeholderImage({
            width: 480,
            height: 360,
            text: "Thumbnail",
          }),
          thumbnail_height: 360,
          provider_url: "https://www.youtube.com/",
          html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/2CEo8If6rmQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          type: "video",
          version: "1.0",
          height: 270,
          author_name: faker.person.fullName(),
          provider_name: "YouTube",
          width: 480,
          title: faker.lorem.words(3),
          thumbnail_width: 480,
          author_url: faker.internet.url(),
          embed_url: "https://www.youtube.com/watch?v=2CEo8If6rmQ",
        },
      },
    ],
  };
});

export default gridVideoSliceFactory;
