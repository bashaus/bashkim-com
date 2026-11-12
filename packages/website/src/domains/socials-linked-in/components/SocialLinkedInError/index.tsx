import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";

import SocialLinkedInHeader from "@/domains/socials-linked-in/components/SocialLinkedInHeader";
import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default function SocialLinkedInError() {
  const t = useTranslations("SocialLinkedInError");

  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent>
        <SocialsError title={t("errorTitle")} message={t("errorMessage")}>
          <Button
            href={getExternalLinkedInUrl()}
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            {t("linkedInButtonLabel")}
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
