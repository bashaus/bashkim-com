import type { AccoladeSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import prismicDateFactory from "../../prismic/prismicDateFactory";
import prismicHeadingFactory from "../../prismic/prismicHeadingFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const accoladeSlicePrimaryFactory =
  Factory.define<AccoladeSliceTypePrimaryFragment>(() => {
    return {
      accolade_slice_type_description: prismicParagraphFactory.buildList(1),
      accolade_slice_type_date: prismicDateFactory.build(),
      accolade_slice_type_issuer: prismicHeadingFactory.buildList(1, {
        text: faker.company.name(),
      }),
    };
  });

export default accoladeSlicePrimaryFactory;
