import { GetHomePage } from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export async function getHomePage() {
  return await apolloClient.query({
    query: GetHomePage,
  });
}
