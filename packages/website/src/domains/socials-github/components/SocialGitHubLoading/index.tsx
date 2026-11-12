import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import { useTranslations } from "next-intl";

import SocialGitHubItem from "@/domains/socials-github/components/SocialGitHubItem";

export default function SocialGitHubLoading() {
  const t = useTranslations("SocialGitHubLoading");
  let i = 0;

  return (
    <SocialsContent>
      <ListSubheader component="div">
        <SocialsMotion custom={++i}>{t("title")}</SocialsMotion>
      </ListSubheader>

      {[...new Array(5).keys()].map(() => (
        <SocialsMotion key={++i} custom={i}>
          <ListItem>
            <SocialGitHubItem
              name={<Skeleton />}
              description={<Skeleton />}
              icon={<Skeleton variant="rounded" width={32} height={32} />}
            />
          </ListItem>
        </SocialsMotion>
      ))}
    </SocialsContent>
  );
}
