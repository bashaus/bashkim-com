"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import Divider from "@mui/material/Divider";

import SocialLinkedInHeader from "@/domains/socials-linked-in/components/SocialLinkedInHeader";

export default function SocialLinkedInLoading() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent></SocialsContent>
    </>
  );
}
