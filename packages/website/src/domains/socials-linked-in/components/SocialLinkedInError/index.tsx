import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialLinkedInHeader from "@/domains/socials-linked-in/components/SocialLinkedInHeader";
import { getExternalLinkedInUrl } from "@/libraries/app/navigation";

export default function SocialLinkedInError() {
  return (
    <>
      <SocialLinkedInHeader />
      <Divider />

      <SocialsContent>
        <SocialsError
          title="Connection error"
          message="An error occurred while synchronising data from LinkedIn."
        >
          <Button
            href={getExternalLinkedInUrl()}
            target="_blank"
            rel="noreferrer noopener"
            endIcon={<OpenInNewIcon />}
          >
            Go to Linked In
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
