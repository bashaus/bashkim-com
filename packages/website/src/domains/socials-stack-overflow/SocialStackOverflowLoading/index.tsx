"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialStackOverflowHeaderDisconnected from "../SocialStackOverflowHeaderDisconnected";
import SocialStackOverflowItem from "../SocialStackOverflowItem";

export default function SocialStackOverflowLoading() {
  let i = -1;
  return (
    <>
      <SocialsMotion custom={++i}>
        <SocialStackOverflowHeaderDisconnected />
      </SocialsMotion>
      <Divider />

      <SocialsContent>
        <ListSubheader component="div">
          <SocialsMotion custom={++i}>Synchronising</SocialsMotion>
        </ListSubheader>

        {[...new Array(5).keys()].map(() => (
          <SocialsMotion key={++i} custom={i}>
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
          </SocialsMotion>
        ))}
      </SocialsContent>
    </>
  );
}
