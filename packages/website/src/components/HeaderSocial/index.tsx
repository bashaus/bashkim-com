import {
  GitHubVector,
  LinkedInOutlinedVector,
  MediumVector,
  StackOverflowVector,
} from "@bashkim-com/design-system/SocialsAssets";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import {
  getSocialsGitHubPath,
  getSocialsLinkedInPath,
  getSocialsMediumPath,
  getSocialsStackOverflowPath,
} from "@/libraries/app/navigation";

export default function HeaderSocial() {
  const locale = useLocale();
  const t = useTranslations("HeaderSocial");

  return (
    <Stack direction="row">
      <Link href={getSocialsGitHubPath({ locale })}>
        <Tooltip title={t("gitHubTooltipLabel")} arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <GitHubVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href={getSocialsMediumPath({ locale })}>
        <Tooltip title={t("mediumTooltipLabel")} arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <MediumVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href={getSocialsLinkedInPath({ locale })}>
        <Tooltip title={t("linkedInTooltipLabel")} arrow placement="bottom">
          <IconButton sx={{ color: "currentColor" }}>
            <LinkedInOutlinedVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>

      <Link href={getSocialsStackOverflowPath({ locale })}>
        <Tooltip
          title={t("stackOverflowTooltipLabel")}
          arrow
          placement="bottom"
        >
          <IconButton sx={{ color: "currentColor" }}>
            <StackOverflowVector width={30} height={30} />
          </IconButton>
        </Tooltip>
      </Link>
    </Stack>
  );
}
