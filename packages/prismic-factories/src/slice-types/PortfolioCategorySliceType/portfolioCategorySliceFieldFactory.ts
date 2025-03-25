import type { PortfolioCategorySliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

const portfolioCategorySliceFieldFactory =
  Factory.define<PortfolioCategorySliceTypeFieldFragment>(() => {
    return {
      portfolio_category_case_study: {},
    };
  });

export default portfolioCategorySliceFieldFactory;
