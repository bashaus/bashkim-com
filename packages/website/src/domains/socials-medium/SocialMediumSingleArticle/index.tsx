import { MediumArticle } from "@bashkim-com/socials";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";

export type SocialMediumSingleArticleProps = Readonly<{
  article: MediumArticle;
}>;

export default function SocialMediumSingleArticle({
  article,
}: SocialMediumSingleArticleProps) {
  const [link] = article.links;

  return (
    <MenuItem
      component="a"
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      sx={{ padding: 0 }}
    >
      <ListItem alignItems="flex-start">
        <ListItemIcon sx={{ width: 56 }}>
          <DescriptionOutlinedIcon />
        </ListItemIcon>

        <ListItemText primary="Medium Article" secondary={link.title} />
      </ListItem>
    </MenuItem>
  );
}
