import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialMediumHeader from "@/domains/socials-medium/SocialMediumHeader";

export default function SocialMediumLoading() {
  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <SocialContent>
        <ListSubheader>Loading profile</ListSubheader>
        <CircularProgress />
      </SocialContent>
    </>
  );
}
