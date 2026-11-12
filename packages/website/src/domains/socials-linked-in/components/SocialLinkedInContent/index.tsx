"use client";

import { LinkedInOutlinedVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslations } from "next-intl";

import SocialLinkedInHeader from "@/domains/socials-linked-in/components/SocialLinkedInHeader";
import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default function SocialLinkedInContent() {
  const t = useTranslations("SocialLinkedInContent");

  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent>
        <SocialsError
          icon={<LinkedInOutlinedVector width={64} height={64} />}
          title={t("title")}
          message={t("subtitle")}
        >
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
