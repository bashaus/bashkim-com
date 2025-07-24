import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialGitHubHeader from "@/domains/socials-github/SocialGitHubHeader";

import SocialGitHubPinnedItemButton from "../SocialGitHubPinnedItemButton";

export default function SocialGitHubLoading() {
  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <SocialContent>
        <ListSubheader>Synchronising</ListSubheader>

        {[...new Array(3)].map((_, i) => (
          <ListItem key={i}>
            <SocialGitHubPinnedItemButton
              name={<Skeleton />}
              description={<Skeleton />}
              icon={<Skeleton variant="rounded" width={32} height={32} />}
            />
          </ListItem>
        ))}
      </SocialContent>
    </>
  );
}
