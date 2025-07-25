"use client";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMotion from "@/domains/socials/components/SocialMotion";

import SocialStackOverflowHeaderDisconnected from "../SocialStackOverflowHeaderDisconnected";
import SocialStackOverflowItem from "../SocialStackOverflowItem";

export default function SocialStackOverflowLoading() {
  let i = -1;
  return (
    <>
      <SocialMotion custom={++i}>
        <SocialStackOverflowHeaderDisconnected />
      </SocialMotion>
      <Divider />

      <SocialContent>
        <ListSubheader component="div">
          <SocialMotion custom={++i}>Synchronising</SocialMotion>
        </ListSubheader>

        {[...new Array(5).keys()].map(() => (
          <SocialMotion key={++i} custom={i}>
            <ListItem>
              <SocialStackOverflowItem
                score={undefined}
                title={
                  <>
                    <Skeleton />
                    <Skeleton />
                  </>
                }
                type={<Skeleton sx={{ maxWidth: 100 }} />}
              />
            </ListItem>
          </SocialMotion>
        ))}
      </SocialContent>
    </>
  );
}
