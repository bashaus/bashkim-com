import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialContent from "@/domains/socials/components/SocialContent";
import SocialError from "@/domains/socials/components/SocialError";

import SocialStackOverflowHeaderDisconnected from "../SocialStackOverflowHeaderDisconnected";

export default function SocialStackOverflowError() {
  return (
    <>
      <SocialStackOverflowHeaderDisconnected />
      <Divider />

      <SocialContent>
        <SocialError
          title="Connection error"
          message="An error occurred while trying to download data from Stack Overflow."
        >
          <Button
            href="https://stackoverflow.com/users/600240/bashaus"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to Stack Overflow
          </Button>
        </SocialError>
      </SocialContent>
    </>
  );
}
