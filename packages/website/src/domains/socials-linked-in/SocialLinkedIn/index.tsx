"use client";

import Divider from "@mui/material/Divider";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialLinkedInHeader from "@/domains/socials-linked-in/SocialLinkedInHeader";

export default function SocialLinkedIn() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialContent></SocialContent>
    </>
  );
}
