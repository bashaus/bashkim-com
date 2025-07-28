import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsMotion from "@bashkim-com/design-system/SocialsMotion";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialMediumItem from "../SocialMediumItem";

export default function SocialMediumLoading() {
  let i = -1;

  return (
    <SocialsContent>
      <ListSubheader component="div">
        <SocialsMotion custom={++i}>Synchronising</SocialsMotion>
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
              pubDate={<Skeleton sx={{ maxWidth: 100 }} />}
            />
          </ListItem>
        </SocialsMotion>
      ))}
    </SocialsContent>
  );
}
