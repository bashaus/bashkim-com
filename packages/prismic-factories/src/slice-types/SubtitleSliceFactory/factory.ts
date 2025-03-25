import type { SubtitleSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const subtitleSliceFactory = Factory.define<SubtitleSliceTypeFragment>(() => {
  return {
    type: "SubtitleSliceType",
    label: null,
    primary: {
      subtitle_slice_type_heading: [
        {
          type: "heading2",
          text: faker.lorem.words(3),
          spans: [],
        },
      ],
      subtitle_slice_type_description: [
        {
          type: "paragraph",
          text: faker.lorem.words(10),
          spans: [],
        },
      ],
    },
  };
});

export default subtitleSliceFactory;
