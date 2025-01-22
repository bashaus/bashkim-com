"use client";

import { MediumArticle } from "@bashkim-com/socials";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import SocialMediumHeader from "../SocialMediumHeader";

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
          <MenuItem
            component="a"
            href={article.url}
            target="_blank"
            rel="noreferrer noopener"
            sx={{ padding: 0 }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>

              <ListItemText
                primary={
                  article.multipart && <>Part {article.multipart.part}</>
                }
                secondary={article.title}
              />
            </ListItem>
          </MenuItem>
        </Stack>
      ))}
    </>
  );
}
