import { MediumArticle } from "@bashkim-com/socials";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import MediumClapVector from "../../assets/vectors/icons/medium-clap.svg";
import MediumVector from "../../assets/vectors/social/medium.svg";
import SocialDrawer from "../SocialDrawer";
import SocialHeader from "../SocialHeader";

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
        <MenuItem
          key={article.title}
          component="a"
          href={article.url}
          target="_blank"
          style={{ alignItems: "flex-start" }}
        >
          <ListItemIcon>
            <Stack alignItems="center" justifyContent="center">
              <MediumClapVector width={24} height={24} />
              <div>{article.claps}</div>
            </Stack>
          </ListItemIcon>

          <ListItemText primary="Article" secondary={article.title} />
        </MenuItem>
      ))}
    </SocialDrawer>
  );
}
