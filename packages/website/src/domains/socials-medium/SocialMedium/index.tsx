"use client";

import { MediumArticle } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";

import SocialMediumHeader from "../SocialMediumHeader";
import SocialMediumMultiPartArticle from "../SocialMediumMultiPartArticle";
import SocialMediumSingleArticle from "../SocialMediumSingleArticle";

export type SocialMediumProps = Readonly<{
  articles: Array<MediumArticle>;
}>;

export default function SocialMedium({ articles }: SocialMediumProps) {
  return (
    <>
      <SocialMediumHeader />

      <Divider />
      <ListSubheader>Recent articles</ListSubheader>

      {articles.map((article) => (
        <Stack key={article.title}>
          {article.links.length === 1 && (
            <SocialMediumSingleArticle article={article} />
          )}

          {article.links.length !== 1 && (
            <SocialMediumMultiPartArticle article={article} />
          )}
        </Stack>
      ))}
    </>
  );
}
