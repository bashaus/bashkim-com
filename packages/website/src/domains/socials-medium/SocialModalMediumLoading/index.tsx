import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialMediumHeader from "../SocialMediumHeader";

export default function SocialModalMediumLoading() {
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
