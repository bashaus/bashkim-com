import { PageHeaderPartial } from "@bashkim-com/design-system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BackgroundImage from "../../assets/background-image.jpg";

export default function HomeHello() {
  return (
    <PageHeaderPartial id="HomePage-Hello" imageDesktop={BackgroundImage.src}>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello, I&apos;m Bash
      </Typography>

      <Typography variant="subtitle1">
        I&apos;m a Digital Nomad Technologist based in Barcelona, specialising
        in{" "}
        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#tangible-media"
        >
          tangible&nbsp;media
        </Button>{" "}
        and{" "}
        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#web-development"
        >
          web&nbsp;development
        </Button>
      </Typography>
    </PageHeaderPartial>
  );
}
