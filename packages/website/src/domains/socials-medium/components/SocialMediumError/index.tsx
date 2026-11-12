import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";

import SocialMediumHeader from "@/domains/socials-medium/components/SocialMediumHeader";
import { getExternalMediumUrl } from "@/libraries/app/navigation";

export default function SocialMediumError() {
  const t = useTranslations("SocialMediumError");

  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <SocialsContent>
        <SocialsError title={t("errorTitle")} message={t("errorMessage")}>
          <Button
            href={getExternalMediumUrl()}
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            {t("mediumButtonLabel")}
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
