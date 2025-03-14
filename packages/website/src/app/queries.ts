import {
  GetHomePageDocument,
  GetHomePageQuery,
} from "@bashkim-com/prismic-dal";

import prismicClient from "@/libraries/prismic/PrismicClient";

export async function getPrismicPage() {
  return prismicClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
  });
}
