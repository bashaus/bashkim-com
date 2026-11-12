"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import type {
  GitHubGistFragment,
  GitHubRepositoryFragment,
} from "@bashkim-com/socials";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import { useTranslations } from "next-intl";

import SocialGitHubItem from "@/domains/socials-github/components/SocialGitHubItem";
import { getExternalGitHubUrl } from "@/libraries/app/navigation";
import MuiNextLink from "@/libraries/material-ui/link";

export type SocialGitHubContentProps = Readonly<{
  repositoryCount: number;
  pinnedItems: Array<GitHubGistFragment | GitHubRepositoryFragment>;
}>;

export default function SocialGitHubContent({
  repositoryCount,
  pinnedItems,
}: SocialGitHubContentProps) {
  const t = useTranslations("SocialGitHubContent");
  let i = -1;

  return (
    <SocialsContent>
      <ListSubheader component="div">
        <SocialsMotion custom={++i}>
          {t("pinnedItemsSummary", {
            pinnedCount: pinnedItems.length,
            totalCount: repositoryCount,
          })}
        </SocialsMotion>
      </ListSubheader>

      {pinnedItems.map((item) => (
        <SocialsMotion key={++i} custom={i}>
          <ListItemButton
            component="a"
            LinkComponent={MuiNextLink}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <SocialGitHubItem
              name={item.name}
              description={item.description}
              stargazerCount={item.stargazerCount}
              forkCount={"forkCount" in item ? item.forkCount : undefined}
            />
          </ListItemButton>
        </SocialsMotion>
      ))}

      <SocialsMotion custom={++i}>
        <ListItemButton
          href={getExternalGitHubUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialGitHubItem
            icon={
              <ReadMoreIcon
                aria-label={t("repositoryIconAriaLabel")}
                fill="currentColor"
                sx={{ width: 32, height: 32 }}
              />
            }
            name={t("moreRepositoriesTitle", {
              repositoryCount: repositoryCount - pinnedItems.length,
            })}
            description={t("moreRepositoriesDescription")}
          />
        </ListItemButton>
      </SocialsMotion>
    </SocialsContent>
  );
}
