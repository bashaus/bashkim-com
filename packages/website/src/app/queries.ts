import {
  GetHomePageDocument,
  GetHomePageQuery,
} from "@bashkim-com/prismic-dal";

import prismicClient from "@/libraries/prismic/client";

export async function getPrismicPage() {
  return prismicClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
  });
}
