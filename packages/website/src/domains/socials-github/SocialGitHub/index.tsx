"use client";

import { GitHubPinnedItem } from "@bashkim-com/socials";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";

import GitHubRepo from "../../../assets/vectors/icons/github-repo.svg";
import SocialGitHubHeader from "../SocialGitHubHeader";

export type SocialGitHubProps = Readonly<{
  repositoryCount: number;
  pinnedItems: Array<GitHubPinnedItem>;
}>;

export default function SocialGitHub({
  repositoryCount,
  pinnedItems,
}: SocialGitHubProps) {
  return (
    <>
      <SocialGitHubHeader />

      <Divider />
      <ListSubheader>
        Pinned items ({pinnedItems.length}/{repositoryCount})
      </ListSubheader>

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

      <MenuItem
        component="a"
        href="https://github.com/bashaus?tab=repositories"
        target="_blank"
        style={{ alignItems: "flex-start" }}
      >
        <ListItemIcon sx={{ py: 0.5 }}>
          <ReadMoreIcon aria-label="Repository" fill="currentColor" />
        </ListItemIcon>

        <ListItemText
          primary={
            <>{repositoryCount - pinnedItems.length} more repositories</>
          }
          secondary="View on GitHub"
        />
      </MenuItem>
    </>
  );
}
