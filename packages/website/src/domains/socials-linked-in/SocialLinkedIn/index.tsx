"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import Divider from "@mui/material/Divider";

import SocialLinkedInHeader from "@/domains/socials-linked-in/SocialLinkedInHeader";

export default function SocialLinkedIn() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent></SocialsContent>
    </>
  );
}
