import { GitHubRepoVector } from "@bashkim-com/design-system/SocialsAssets";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export type SocialGitHubItemProps = Readonly<{
  name: ReactNode;
  description: ReactNode;
  forkCount?: number;
  stargazerCount?: number;

  icon?: ReactNode;
}>;

export default function SocialGitHubItem({
  icon = (
    <GitHubRepoVector
      aria-label="Repository"
      fill="currentColor"
      width={38}
      height={38}
    />
  ),
  name,
  description,
  forkCount,
  stargazerCount,
}: SocialGitHubItemProps) {
  const t = useTranslations("SocialGitHubItem");
  const hasChips = !!forkCount || !!stargazerCount;

  return (
    <>
      <ListItemIcon sx={{ alignSelf: "flex-start", paddingTop: 1 }}>
        {icon}
      </ListItemIcon>

      <ListItemText>
        <Typography variant="body1">
          {name}
          {name === "bashkim-com" && (
            <Chip
              label={t("siteSourceChipLabel")}
              size="small"
              sx={{ marginLeft: 1, fontSize: ".7rem" }}
              component="span"
            />
          )}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "textSecondary",
            fontSize: "small",
          }}
        >
          {description}
        </Typography>

        {hasChips && (
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            {!!stargazerCount && (
              <Tooltip title={t("stargazersTooltipLabel")} arrow>
                <Chip
                  icon={<StarOutlinedIcon />}
                  label={stargazerCount}
                  aria-label={t("stargazersAriaLabel", { stargazerCount })}
                  component="span"
                  size="small"
                />
              </Tooltip>
            )}

            {!!forkCount && (
              <Tooltip title={t("forksTooltipLabel")} arrow>
                <Chip
                  icon={<ForkRightIcon />}
                  label={forkCount}
                  aria-label={t("forksAriaLabel", { forkCount })}
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
