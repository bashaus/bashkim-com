import { graphql } from "../../gql";

export const HomePageModel = graphql(`
  fragment HomePageModel on Home_page {
    meta_title
    meta_description
  }
`);
