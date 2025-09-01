import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialGitHubHeader from "@/domains/socials-github/components/SocialGitHubHeader";

export default function SocialGitHubError() {
  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <SocialsContent>
        <SocialsError
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
        </SocialsError>
      </SocialsContent>
    </>
  );
}
