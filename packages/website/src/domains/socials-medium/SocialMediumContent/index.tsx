"use client";

import DateFormatter from "@bashkim-com/design-system/DateFormatter";
import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import { GetMediumSocialsResponse } from "@bashkim-com/socials";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

import SocialMediumItem from "../SocialMediumItem";

export type SocialMediumContentProps = Readonly<{
  series: GetMediumSocialsResponse["series"];
}>;

export default function SocialMediumContent({
  series,
}: SocialMediumContentProps) {
  let i = -1;

  const entries = Object.entries(series);

  return (
    <SocialsContent>
      {entries.map(([group, articles]) => (
        <Fragment key={group}>
          {articles.length > 1 && (
            <ListSubheader component="div">
              <SocialsMotion custom={++i}>Multipart series</SocialsMotion>
            </ListSubheader>
          )}

          {articles.map((article) => (
            <SocialsMotion key={article.title} custom={++i}>
              <ListItemButton
                href={article.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <SocialMediumItem
                  image={
                    <img
                      alt={article.imageAlt}
                      src={article.imageSrc}
                      style={{ aspectRatio: "16 / 9" }}
                    />
                  }
                  title={article.title}
                  part={article.multipart?.part}
                  pubDate={<DateFormatter date={article.pubDate} />}
                />
              </ListItemButton>
            </SocialsMotion>
          ))}
        </Fragment>
      ))}

      <SocialsMotion custom={++i}>
        <ListItemButton
          href="https://github.com/bashaus?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon>
            <ReadMoreIcon
              aria-label="Repository"
              fill="currentColor"
              sx={{ width: 32, height: 32 }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1">More articles on Medium</Typography>
            <Typography
              variant="body2"
              fontSize="small"
              color="textSecondary"
              gutterBottom
            >
              View articles by @bashaus
            </Typography>
          </ListItemText>
        </ListItemButton>
      </SocialsMotion>
    </SocialsContent>
  );
}
