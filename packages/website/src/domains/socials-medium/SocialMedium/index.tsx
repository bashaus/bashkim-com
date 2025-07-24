"use client";

import { MediumArticle } from "@bashkim-com/socials";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMediumHeader from "@/domains/socials-medium/SocialMediumHeader";

export type SocialMediumProps = Readonly<{
  articles: Array<MediumArticle>;
}>;

export default function SocialMedium({ articles }: SocialMediumProps) {
  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <SocialContent>
        <ListSubheader>Recent articles</ListSubheader>

        {articles.map((article) => (
          <ListItemButton
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <ListItemIcon>
              <DescriptionOutlinedIcon sx={{ width: 32, height: 32 }} />
            </ListItemIcon>

            <ListItemText>
              <Typography variant="body1">{article.title}</Typography>
              <Typography variant="body2">
                {article.multipart && <>Part {article.multipart.part}</>}
              </Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </SocialContent>
    </>
  );
}
