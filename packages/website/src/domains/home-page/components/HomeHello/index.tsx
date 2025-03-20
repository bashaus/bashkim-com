import { FullHeaderPartial, VideoBackground } from "@bashkim-com/design-system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import * as S from "./styles";

export default function HomeHello() {
  return (
    <FullHeaderPartial
      background={<VideoBackground url="https://vimeo.com/1067276219" />}
    >
      <S.Logo />

      <Typography variant="subtitle1">
        Digital Nomad Technologist based in Barcelona, specialising in{" "}
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
    </FullHeaderPartial>
  );
}
