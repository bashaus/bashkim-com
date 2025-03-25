import { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const exhibitionSliceFactory = Factory.define<ExhibitionSliceTypeFragment>(
  () => {
    return {
      type: "ExhibitionSliceType",
      label: null,
      primary: {
        exhibition_slice_type_name: [
          {
            type: "heading3",
            text: "Exhibition slice",
            spans: [],
          },
        ],
        exhibition_slice_type_link: {
          url: faker.internet.url(),
          target: null,
        },
        exhibition_slice_type_opening_date: "2015-04-27",
        exhibition_slice_type_closing_date: "2015-05-06",
        exhibition_slice_type_location: [
          {
            type: "paragraph",
            text: "London, United Kingdom",
            spans: [],
          },
        ],
      },
    };
  },
);

export default exhibitionSliceFactory;
