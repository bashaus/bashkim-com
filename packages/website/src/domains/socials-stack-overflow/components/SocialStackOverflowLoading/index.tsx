"use client";

import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import { useTranslations } from "next-intl";

import SocialStackOverflowHeaderDisconnected from "@/domains/socials-stack-overflow/components/SocialStackOverflowHeaderDisconnected";
import SocialStackOverflowItem from "@/domains/socials-stack-overflow/components/SocialStackOverflowItem";

export default function SocialStackOverflowLoading() {
  const t = useTranslations("SocialStackOverflowLoading");
  let i = -1;

  return (
    <>
      <SocialsMotion custom={++i}>
        <SocialStackOverflowHeaderDisconnected />
      </SocialsMotion>
      <Divider />

      <SocialsContent>
        <ListSubheader component="div">
          <SocialsMotion custom={++i}>{t("title")}</SocialsMotion>
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
