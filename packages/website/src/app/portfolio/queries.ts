import {
  GetPortfolioPageDocument,
  GetPortfolioPageQuery,
} from "@bashkim-com/prismic-dal";

import prismicClient from "@/libraries/prismic/client";

export async function getPrismicPage() {
  return prismicClient.query<GetPortfolioPageQuery>({
    query: GetPortfolioPageDocument,
  });
}
