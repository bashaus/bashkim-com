import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import { useTranslations } from "next-intl";

import SocialMediumItem from "@/domains/socials-medium/components/SocialMediumItem";

export default function SocialMediumLoading() {
  const t = useTranslations("SocialMediumLoading");
  let i = -1;

  return (
    <SocialsContent>
      <ListSubheader component="div">
        <SocialsMotion custom={++i}>{t("title")}</SocialsMotion>
      </ListSubheader>

      {[...new Array(5).keys()].map(() => (
        <SocialsMotion key={++i} custom={i}>
          <ListItem component="div">
            <SocialMediumItem
              title={
                <>
                  <Skeleton />
                  <Skeleton />
                </>
              }
              image={
                <Skeleton
                  variant="rounded"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16 / 9",
                  }}
                />
              }
              publishedAt={<Skeleton sx={{ maxWidth: 100 }} />}
            />
          </ListItem>
        </SocialsMotion>
      ))}
    </SocialsContent>
  );
}
