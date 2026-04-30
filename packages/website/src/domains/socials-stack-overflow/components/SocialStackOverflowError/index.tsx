import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialStackOverflowHeaderDisconnected from "@/domains/socials-stack-overflow/components/SocialStackOverflowHeaderDisconnected";
import { getExternalStackOverflowUrl } from "@/libraries/app/navigation";

export default function SocialStackOverflowError() {
  return (
    <>
      <SocialStackOverflowHeaderDisconnected />
      <Divider />

      <SocialsContent>
        <SocialsError
          title="Connection error"
          message="An error occurred while synchronising data from Stack Overflow."
        >
          <Button
            href={getExternalStackOverflowUrl()}
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            Go to Stack Overflow
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
