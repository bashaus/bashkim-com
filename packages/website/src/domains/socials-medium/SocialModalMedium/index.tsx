"use client";

import { MediumArticle } from "@bashkim-com/socials";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialMediumHeader from "../SocialMediumHeader";
import SocialMediumMultiPartArticle from "../SocialMediumMultiPartArticle";
import SocialMediumSingleArticle from "../SocialMediumSingleArticle";

export type SocialModalMediumProps = Readonly<{
  articles: Array<MediumArticle>;
}>;

export default function SocialModalMedium({
  articles,
}: SocialModalMediumProps) {
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
