import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import SocialGitHubHeader from "../SocialGitHubHeader";

export default function SocialGitHubLoading() {
  return (
    <>
      <SocialGitHubHeader />

      <Divider />
      <ListSubheader>Loading profile</ListSubheader>

      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </>
  );
}
