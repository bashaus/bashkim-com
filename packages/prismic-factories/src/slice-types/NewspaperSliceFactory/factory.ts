import type { NewspaperSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const newspaperSliceFactory = Factory.define<NewspaperSliceTypeFragment>(() => {
  return {
    type: "GridVideoSliceType",
    label: null,
    fields: [
      {
        newspaper_slice_type_group: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
      },
      {
        newspaper_slice_type_group: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
      },
      {
        newspaper_slice_type_group: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
      },
      {
        newspaper_slice_type_group: [
          {
            type: "paragraph",
            text: faker.lorem.words(10),
            spans: [],
          },
        ],
      },
    ],
  };
});

export default newspaperSliceFactory;
