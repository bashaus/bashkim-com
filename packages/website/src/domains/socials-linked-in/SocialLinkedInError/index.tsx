import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialError from "@/domains/socials/components/SocialError";

import SocialLinkedInHeader from "../SocialLinkedInHeader";

export default function SocialLinkedInError() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialContent>
        <SocialError
          title="Connection error"
          message="An error occurred while trying to download data from LinkedIn."
        >
          <Button
            href="https://www.linkedin.com/in/bashaus/"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to Linked In
          </Button>
        </SocialError>
      </SocialContent>
    </>
  );
}
