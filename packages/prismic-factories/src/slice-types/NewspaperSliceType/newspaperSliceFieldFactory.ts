import type { NewspaperSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";

const newspaperSliceFieldFactory =
  Factory.define<NewspaperSliceTypeFieldFragment>(() => {
    return {
      newspaper_slice_type_group: prismicParagraphFactory.buildList(1),
    };
  });

export default newspaperSliceFieldFactory;
