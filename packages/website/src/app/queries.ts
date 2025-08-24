import {
  GetHomePageDocument,
  GetHomePageQuery,
} from "@bashkim-com/prismic-dal";

import { apolloClient } from "@/libraries/prismic/client";

export async function getPrismicPage() {
  return apolloClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
  });
}
