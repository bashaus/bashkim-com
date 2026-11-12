import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";

import SocialStackOverflowHeaderDisconnected from "@/domains/socials-stack-overflow/components/SocialStackOverflowHeaderDisconnected";
import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

export default function SocialStackOverflowError() {
  const t = useTranslations("SocialStackOverflowError");

  return (
    <>
      <SocialStackOverflowHeaderDisconnected />
      <Divider />

      <SocialsContent>
        <SocialsError title={t("errorTitle")} message={t("errorMessage")}>
          <Button
            href={getExternalStackOverflowUrl()}
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            {t("stackOverflowButtonLabel")}
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
