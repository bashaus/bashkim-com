"use client";

import DateFormatter from "@bashkim-com/design-system/DateFormatter";
import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import { GetMediumStoriesResponse } from "@bashkim-com/socials";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Fragment } from "react";

import SocialMediumItem from "@/domains/socials-medium/components/SocialMediumItem";

export type SocialMediumContentProps = Readonly<{
  series: GetMediumStoriesResponse["series"];
}>;

export default function SocialMediumContent({
  series,
}: SocialMediumContentProps) {
  let i = -1;

  const entries = Object.entries(series);

  return (
    <SocialsContent>
      {entries.map(([group, stories]) => (
        <Fragment key={group}>
          {stories.length > 1 && (
            <ListSubheader component="div">
              <SocialsMotion custom={++i}>Multipart series</SocialsMotion>
            </ListSubheader>
          )}

          {stories.map((story) => (
            <SocialsMotion key={story.title} custom={++i}>
              <ListItemButton
                href={story.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <SocialMediumItem
                  image={
                    story.image && (
                      <Image
                        alt={story.image.alt}
                        src={story.image.src}
                        width={1024}
                        height={576}
                        style={{ aspectRatio: "16 / 9" }}
                      />
                    )
                  }
                  title={story.title}
                  part={story.multipart?.part}
                  publishedAt={<DateFormatter date={story.publishedAt} />}
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
            <Typography variant="body1">More stories on Medium</Typography>
            <Typography
              variant="body2"
              fontSize="small"
              color="textSecondary"
              gutterBottom
            >
              View stories by @bashaus
            </Typography>
          </ListItemText>
        </ListItemButton>
      </SocialsMotion>
    </SocialsContent>
  );
}
