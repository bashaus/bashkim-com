import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const accoladeSliceFactory = Factory.define<AccoladeSliceTypeFragment>(() => {
  return {
    type: "AccoladeSliceType",
    label: null,
    primary: {
      accolade_slice_type_issuer: [
        {
          type: "heading3",
          text: "Award Issuer",
          spans: [],
        },
      ],
      accolade_slice_type_description: [
        {
          type: "paragraph",
          text: "A description of the award",
          spans: [],
        },
      ],
      accolade_slice_type_date: "2020-01-01",
    },
    fields: [
      {
        accolade_slice_type_award_place: "gold",
        accolade_slice_type_award_link: {
          url: faker.internet.url(),
          target: null,
        },
        accolade_slice_type_award_category: [
          {
            type: "paragraph",
            text: "Gold Award",
            spans: [],
          },
        ],
      },
      {
        accolade_slice_type_award_place: "silver",
        accolade_slice_type_award_link: {
          url: faker.internet.url(),
          target: null,
        },
        accolade_slice_type_award_category: [
          {
            type: "paragraph",
            text: "Silver Award",
            spans: [],
          },
        ],
      },
      {
        accolade_slice_type_award_place: "bronze",
        accolade_slice_type_award_link: {
          url: faker.internet.url(),
          target: null,
        },
        accolade_slice_type_award_category: [
          {
            type: "paragraph",
            text: "Bronze Award",
            spans: [],
          },
        ],
      },
      {
        accolade_slice_type_award_place: "honour",
        accolade_slice_type_award_link: {
          url: faker.internet.url(),
          target: null,
        },
        accolade_slice_type_award_category: [
          {
            type: "paragraph",
            text: "Honour",
            spans: [],
          },
        ],
      },
      {
        accolade_slice_type_award_place: "shortlist",
        accolade_slice_type_award_link: {
          url: faker.internet.url(),
          target: null,
        },
        accolade_slice_type_award_category: [
          {
            type: "paragraph",
            text: "Shortlist",
            spans: [],
          },
        ],
      },
    ],
  };
});

export default accoladeSliceFactory;
