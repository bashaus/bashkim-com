import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";

import SocialGitHubHeader from "@/domains/socials-github/components/SocialGitHubHeader";
import { getExternalGitHubUrl } from "@/libraries/app/navigation";

export default function SocialGitHubError() {
  const t = useTranslations("SocialGitHubError");

  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <SocialsContent>
        <SocialsError title={t("errorTitle")} message={t("errorMessage")}>
          <Button
            href={getExternalGitHubUrl()}
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            {t("gitHubButtonLabel")}
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
