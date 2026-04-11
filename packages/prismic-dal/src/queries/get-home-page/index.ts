import { graphql } from "../../gql";

export const GetHomePage = graphql(`
  query GetHomePage {
    homePage: allHome_pages(first: 1) {
      edges {
        node {
          ...HomePageModel
        }
      }
    }
  }
`);
