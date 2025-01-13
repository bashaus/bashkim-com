import {
  GetPortfolioPageDocument,
  GetPortfolioPageQuery,
} from "@bashkim-com/prismic-dal";

import prismicClient from "../../libraries/prismic/PrismicClient";

export async function getPrismicPage() {
  return prismicClient.query<GetPortfolioPageQuery>({
    query: GetPortfolioPageDocument,
  });
}
