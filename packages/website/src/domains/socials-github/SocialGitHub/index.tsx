"use client";

import type {
  GitHubGistFragment,
  GitHubRepositoryFragment,
} from "@bashkim-com/socials";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialGitHubHeader from "@/domains/socials-github/SocialGitHubHeader";
import MuiNextLink from "@/libraries/material-ui/link";

import SocialGitHubPinnedItemButton from "../SocialGitHubPinnedItemButton";

export type SocialGitHubProps = Readonly<{
  repositoryCount: number;
  pinnedItems: Array<GitHubGistFragment | GitHubRepositoryFragment>;
}>;

export default function SocialGitHub({
  repositoryCount,
  pinnedItems,
}: SocialGitHubProps) {
  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <SocialContent>
        <ListSubheader>
          Pinned items &mdash; {pinnedItems.length} of {repositoryCount}
        </ListSubheader>

        {pinnedItems.map((item) => (
          <ListItemButton
            component="a"
            LinkComponent={MuiNextLink}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <SocialGitHubPinnedItemButton
              name={item.name}
              description={item.description}
              stargazerCount={item.stargazerCount}
              forkCount={"forkCount" in item ? item.forkCount : undefined}
            />
          </ListItemButton>
        ))}

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

          <ListItemText
            primary={
              <>{repositoryCount - pinnedItems.length} more repositories</>
            }
            secondary="Available on GitHub"
          />
        </ListItemButton>
      </SocialContent>
    </>
  );
}
