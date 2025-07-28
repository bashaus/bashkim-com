import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialLinkedInHeader from "../SocialLinkedInHeader";

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
            href="https://www.linkedin.com/in/bashaus/"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to Linked In
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
