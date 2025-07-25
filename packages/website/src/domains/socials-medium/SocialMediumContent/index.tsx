"use client";

import DateFormatter from "@bashkim-com/design-system/DateFormatter";
import { MediumArticle } from "@bashkim-com/socials";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMotion from "@/domains/socials/components/SocialMotion";

import SocialMediumItem from "../SocialMediumItem";

export type SocialMediumContentProps = Readonly<{
  articles: Array<MediumArticle>;
}>;

export default function SocialMediumContent({
  articles,
}: SocialMediumContentProps) {
  let i = -1;

  return (
    <SocialContent>
      <ListSubheader component="div">
        <SocialMotion custom={++i}>Recent articles</SocialMotion>
      </ListSubheader>

      {articles.map((article) => (
        <SocialMotion key={article.title} custom={++i}>
          <ListItemButton
            href={article.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SocialMediumItem
              image={
                <img
                  src={article.image}
                  style={{ aspectRatio: "16 / 9" }}
                  alt=""
                />
              }
              title={article.title}
              part={article.multipart?.part}
              pubDate={<DateFormatter date={article.pubDate} />}
            />
          </ListItemButton>
        </SocialMotion>
      ))}
    </SocialContent>
  );
}
