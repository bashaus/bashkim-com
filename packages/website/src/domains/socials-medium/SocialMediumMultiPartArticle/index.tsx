import { MediumArticle } from "@bashkim-com/socials";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";
import Filter9Icon from "@mui/icons-material/Filter9";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";
import Badge from "@mui/material/Badge";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import { ComponentType } from "react";

const Icons: Record<number, ComponentType> = {
  2: Filter2Icon,
  3: Filter3Icon,
  4: Filter4Icon,
  5: Filter5Icon,
  6: Filter6Icon,
  7: Filter7Icon,
  8: Filter8Icon,
  9: Filter9Icon,
  10: Filter9PlusIcon,
};

export type SocialMediumMultiPartArticleProps = Readonly<{
  article: MediumArticle;
}>;

export default function SocialMediumMultiPartArticle({
  article,
}: SocialMediumMultiPartArticleProps) {
  const Icon = Icons[article.links.length]
    ? Icons[article.links.length]
    : Icons[10];

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemIcon sx={{ width: 56 }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary="Multi-part article" secondary={article.title} />
      </ListItem>

      {article.links.map((link, i) => (
        <MenuItem
          component="a"
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          sx={{ py: 1.5, paddingLeft: 4 }}
        >
          <ListItem disablePadding alignItems="flex-start">
            <ListItemIcon sx={{ width: 50 }}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={i + 1}
                color="info"
                slotProps={{
                  badge: {
                    style: {
                      fontSize: 12,
                    },
                  },
                }}
              >
                <DescriptionOutlinedIcon color="action" />
              </Badge>
            </ListItemIcon>

            <ListItemText secondary={<>{link.title}</>} />
          </ListItem>
        </MenuItem>
      ))}
    </>
  );
}
