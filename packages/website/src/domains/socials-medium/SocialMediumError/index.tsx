import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialError from "@/domains/socials/components/SocialError";

import SocialMediumHeader from "../SocialMediumHeader";

export default function SocialMediumError() {
  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <SocialContent>
        <SocialError
          title="Connection error"
          message="An error occurred while trying to download data from Medium."
        >
          <Button
            href="https://medium.com/@bashaus"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to Medium
          </Button>
        </SocialError>
      </SocialContent>
    </>
  );
}
