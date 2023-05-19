import {
  GetPortfolioPageDocument,
  GetPortfolioPageQuery,
} from "@bashkim-com/prismic-dal";

import { prismicClient } from "../../libraries/prismic/PrismicClient";

export const getPrismicPage = async () => {
  return prismicClient.query<GetPortfolioPageQuery>({
    query: GetPortfolioPageDocument,
  });
};
