import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialMediumHeader from "@/domains/socials-medium/SocialMediumHeader";

export default function SocialMediumLoading() {
  return (
    <>
      <SocialMediumHeader />

      <Divider />
      <ListSubheader>Loading profile</ListSubheader>

      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </>
  );
}
