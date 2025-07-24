import ForkRightIcon from "@mui/icons-material/ForkRight";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import GitHubRepo from "@/assets/vectors/icons/github-repo.svg";

export type SocialGitHubPinnedItemButtonProps = Readonly<{
  name: ReactNode;
  description: ReactNode;
  forkCount?: number;
  stargazerCount?: number;

  icon?: ReactNode;
}>;

export default function SocialGitHubPinnedItemButton({
  icon,
  name,
  description,
  forkCount,
  stargazerCount,
}: SocialGitHubPinnedItemButtonProps) {
  const hasChips = !!forkCount || !!stargazerCount;

  return (
    <>
      <ListItemIcon sx={{ alignSelf: "flex-start", paddingTop: 1 }}>
        {icon ? (
          icon
        ) : (
          <GitHubRepo
            aria-label="Repository"
            fill="currentColor"
            width={32}
            height={32}
          />
        )}
      </ListItemIcon>

      <ListItemText>
        <Typography variant="body1" gutterBottom>
          {name}
          {name === "bashkim-com" && (
            <Chip
              label="Site source"
              size="small"
              sx={{ marginLeft: 1, fontSize: ".7rem" }}
              component="span"
            />
          )}
        </Typography>

        <Typography variant="body2">{description}</Typography>

        {hasChips && (
          <Stack direction="row" spacing={1} mt={1}>
            {!!stargazerCount && (
              <Tooltip title="Stargazers" arrow>
                <Chip
                  icon={<StarOutlineIcon />}
                  label={stargazerCount}
                  aria-label={`Stargazers: ${forkCount}`}
                  component="span"
                  size="small"
                />
              </Tooltip>
            )}

            {!!forkCount && (
              <Tooltip title="Forks" arrow>
                <Chip
                  icon={<ForkRightIcon />}
                  label={forkCount}
                  aria-label={`Forks: ${forkCount}`}
                  component="span"
                  size="small"
                />
              </Tooltip>
            )}
          </Stack>
        )}
      </ListItemText>
    </>
  );
}
