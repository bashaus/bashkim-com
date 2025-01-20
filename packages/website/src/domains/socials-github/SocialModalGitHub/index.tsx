"use client";

import { GitHubPinnedItem } from "@bashkim-com/socials";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";

import GitHubRepo from "../../../assets/vectors/icons/github-repo.svg";
import GitHubVector from "../../../assets/vectors/social/github.svg";
import SocialHeader from "../../socials/SocialHeader";

export type SocialModalGitHubProps = Readonly<{
  pinnedItems: Array<GitHubPinnedItem>;
}>;

export default function SocialModalGitHub({
  pinnedItems,
}: SocialModalGitHubProps) {
  return (
    <>
      <SocialHeader
        href="https://github.com/bashaus/"
        avatarBadgeBackground="#333"
        avatarBadge={<GitHubVector width={15} height={15} color="#FFFFF" />}
        textPrimary="@bashaus"
        textSecondary="View profile on GitHub"
      />

      <Divider />
      <ListSubheader>Pinned items</ListSubheader>

      {pinnedItems.map((item) => (
        <MenuItem
          component="a"
          href={item.url}
          target="_blank"
          key={item.name}
          style={{ alignItems: "flex-start" }}
        >
          <ListItemIcon sx={{ py: 0.5 }}>
            <GitHubRepo aria-label="Repository" fill="currentColor" />
          </ListItemIcon>

          <ListItemText
            primary={
              <>
                <span>{item.name}</span>

                {item.name === "bashkim-com" && (
                  <Chip
                    label="This site"
                    color="primary"
                    size="small"
                    sx={{
                      pointerEvents: "none",
                      textTransform: "uppercase",
                      fontSize: "60%",
                      marginLeft: 1,
                    }}
                  />
                )}
              </>
            }
            secondary={item.description}
          />
        </MenuItem>
      ))}
    </>
  );
}
