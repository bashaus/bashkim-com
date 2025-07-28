"use client";

import { LinkedInOutlinedVector } from "@bashkim-com/design-system/SocialsAssets";
import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialLinkedInHeader from "@/domains/socials-linked-in/SocialLinkedInHeader";

export default function SocialLinkedInContent() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent>
        <SocialsError
          icon={<LinkedInOutlinedVector width={64} height={64} />}
          title="No API for LinkedIn"
          message="Unfortunately LinkedIn doesn't support an API to retrieve profile information."
        >
          <Button
            href="https://www.linkedin.com/in/bashaus/"
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            View profile on Linked In
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
