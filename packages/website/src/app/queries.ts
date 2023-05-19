import {
  GetHomePageDocument,
  GetHomePageQuery,
} from "@bashkim-com/prismic-dal";

import { prismicClient } from "../libraries/prismic/PrismicClient";

export const getPrismicPage = async () => {
  return prismicClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
  });
};
