"use client";

import { MediumArticle } from "@bashkim-com/socials";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import MediumVector from "../../../assets/vectors/social/medium.svg";
import SocialDrawer from "../SocialDrawer";
import SocialHeader from "../SocialHeader";
import SocialMediumMultiPartArticle from "../SocialMediumMultiPartArticle";
import SocialMediumSingleArticle from "../SocialMediumSingleArticle";

export type SocialModalMediumProps = Readonly<{
  articles: Array<MediumArticle>;
}>;

export default function SocialModalMedium({
  articles,
}: SocialModalMediumProps) {
  return (
    <SocialDrawer>
      <SocialHeader
        href="https://medium.com/@bashaus"
        avatarBadgeBackground="#000"
        avatarBadge={
          <MediumVector
            width={10}
            height={10}
            viewBox="0 0 100 100"
            color="#FFFFF"
          />
        }
        textPrimary="Bashkim Isai"
        textSecondary="View profile on Medium"
      />

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
    </SocialDrawer>
  );
}
