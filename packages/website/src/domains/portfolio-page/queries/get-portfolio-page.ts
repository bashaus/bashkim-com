import {
  GetPortfolioPageDocument,
  GetPortfolioPageQuery,
} from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export async function getPortfolioPage() {
  return apolloClient.query<GetPortfolioPageQuery>({
    query: GetPortfolioPageDocument,
  });
}
