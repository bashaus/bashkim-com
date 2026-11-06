import { graphql } from "msw/graphql";

process.env["GITHUB_TOKEN"] = "";

export const githubLink = graphql.link("https://api.github.com/graphql");
