import { GetPortfolioPage } from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export async function getPortfolioPage() {
  return await apolloClient.query({
    query: GetPortfolioPage,
  });
}
