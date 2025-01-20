import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import GitHubVector from "../../../assets/vectors/social/github.svg";
import SocialHeader from "../../socials/SocialHeader";

export default function SocialModalGithubLoading() {
  return (
    <>
      <SocialHeader
        href="https://github.com/bashaus/"
        avatarBadgeBackground="#333"
        avatarBadge={<GitHubVector width={15} height={15} color="#FFFFF" />}
        textPrimary="@bashaus"
        textSecondary="View profile on GitHub"
      />

      <Divider />
      <ListSubheader>Loading profile</ListSubheader>

      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </>
  );
}
