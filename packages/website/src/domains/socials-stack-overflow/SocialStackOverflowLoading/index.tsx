"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialContent from "@/domains/socials/components/SocialContent";

import SocialStackOverflowHeaderDisconnected from "../SocialStackOverflowHeaderDisconnected";

export default function SocialStackOverflowLoading() {
  return (
    <>
      <SocialStackOverflowHeaderDisconnected />
      <Divider />

      <SocialContent>
        <ListSubheader>Synchronising</ListSubheader>
        <CircularProgress />
      </SocialContent>
    </>
  );
}
