import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMotion from "@/domains/socials/components/SocialMotion";

import SocialGitHubItem from "../SocialGitHubItem";

export default function SocialGitHubLoading() {
  let i = 0;

  return (
    <SocialContent>
      <ListSubheader component="div">
        <SocialMotion custom={++i}>Synchronising</SocialMotion>
      </ListSubheader>

      {[...new Array(5).keys()].map(() => (
        <SocialMotion key={++i} custom={i}>
          <ListItem>
            <SocialGitHubItem
              name={<Skeleton />}
              description={<Skeleton />}
              icon={<Skeleton variant="rounded" width={32} height={32} />}
            />
          </ListItem>
        </SocialMotion>
      ))}
    </SocialContent>
  );
}
