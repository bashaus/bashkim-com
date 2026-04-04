import { Factory } from "fishery";

import { PortfolioCategorySliceTypeFieldFragment } from "../../gql/graphql";

export const portfolioCategorySliceFieldFactory =
  Factory.define<PortfolioCategorySliceTypeFieldFragment>(() => {
    return {
      portfolio_category_case_study: {},
    };
  });
