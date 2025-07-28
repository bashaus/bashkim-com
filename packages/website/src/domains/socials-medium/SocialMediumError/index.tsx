import SocialsContent from "@bashkim-com/design-system/SocialsContent";
import SocialsError from "@bashkim-com/design-system/SocialsError";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import SocialMediumHeader from "../SocialMediumHeader";

export default function SocialMediumError() {
  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <SocialsContent>
        <SocialsError
          title="Connection error"
          message="An error occurred while synchronising data from Medium."
        >
          <Button
            href="https://medium.com/@bashaus"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Go to Medium
          </Button>
        </SocialsError>
      </SocialsContent>
    </>
  );
}
