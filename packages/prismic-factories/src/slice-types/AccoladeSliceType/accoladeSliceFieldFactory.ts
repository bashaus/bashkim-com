import type { AccoladeSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const accoladeSliceFieldFactory =
  Factory.define<AccoladeSliceTypeFieldFragment>((opts) => {
    const place =
      opts.params.accolade_slice_type_award_place ??
      faker.helpers.arrayElement([
        "gold",
        "silver",
        "bronze",
        "honour",
        "shortlist",
      ]);

    return {
      accolade_slice_type_award_place: place,
      accolade_slice_type_award_link: {
        url: faker.internet.url(),
        target: null,
      },
      accolade_slice_type_award_category: prismicParagraphFactory.buildList(1, {
        text: `Award - ${place}`,
      }),
    };
  });

export default accoladeSliceFieldFactory;
