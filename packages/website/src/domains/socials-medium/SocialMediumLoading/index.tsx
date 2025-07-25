import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMotion from "@/domains/socials/components/SocialMotion";

import SocialMediumItem from "../SocialMediumItem";

export default function SocialMediumLoading() {
  let i = -1;

  return (
    <SocialContent>
      <ListSubheader component="div">
        <SocialMotion custom={++i}>Synchronising</SocialMotion>
      </ListSubheader>

      {[...new Array(5).keys()].map(() => (
        <SocialMotion key={++i} custom={i}>
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
              pubDate={<Skeleton sx={{ maxWidth: 100 }} />}
            />
          </ListItem>
        </SocialMotion>
      ))}
    </SocialContent>
  );
}
