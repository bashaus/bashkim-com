import { ExhibitionSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const exhibitionSlicePrimaryFactory =
  Factory.define<ExhibitionSliceTypePrimaryFragment>(() => {
    return {
      exhibition_slice_type_name: prismicHeadingFactory.buildList(1),
      exhibition_slice_type_link: {
        url: faker.internet.url(),
        target: null,
      },
      exhibition_slice_type_opening_date: faker.date.past({ years: 10 }),
      exhibition_slice_type_closing_date: faker.date.past({ years: 5 }),
      exhibition_slice_type_location: prismicParagraphFactory.buildList(1, {
        text: `${faker.location.city()}, ${faker.location.country()}`,
      }),
    };
  });

export default exhibitionSlicePrimaryFactory;
