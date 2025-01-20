import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import StackOverflowFilledVector from "../../../assets/vectors/social/stack-overflow-filled.svg";
import SocialHeader from "../../socials/SocialHeader";

export default function SocialModalStackOverflowLoading() {
  return (
    <>
      <SocialHeader
        href="https://stackoverflow.com/users/600240/bashaus"
        avatarBadgeBackground="#FFF"
        avatarBadge={<StackOverflowFilledVector width={20} height={20} />}
        textPrimary="Bashkim Isai"
        textSecondary="View on Stack Overflow"
      />

      <Divider />
      <ListSubheader>Loading profile</ListSubheader>

      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </>
  );
}
