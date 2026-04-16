import { graphql } from "msw";

process.env["GITHUB_TOKEN"] = "";

export const githubLink = graphql.link("https://api.github.com/graphql");
