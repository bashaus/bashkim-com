import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialError from "@/domains/socials/components/SocialError";

import SocialGitHubHeader from "../SocialGitHubHeader";

export default function SocialGitHubError() {
  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <SocialContent>
        <SocialError
          title="Connection error"
          message="An error occurred while synchronising data from GitHub."
        >
          <Button
            href="https://github.com/bashaus/"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to GitHub
          </Button>
        </SocialError>
      </SocialContent>
    </>
  );
}
