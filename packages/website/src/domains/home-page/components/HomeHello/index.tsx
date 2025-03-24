import FullHeaderPartial from "@bashkim-com/design-system/FullHeaderPartial";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

import * as S from "./styles";

const VideoBackground = dynamic(
  () => import("@bashkim-com/design-system/VideoBackground"),
  { ssr: false },
);

export default function HomeHello() {
  return (
    <FullHeaderPartial
      background={<VideoBackground url="https://vimeo.com/1067276219" />}
    >
      <S.Logo />

      <Typography variant="subtitle1">
        Digital Nomad Technologist based in Barcelona,&nbsp;Spain.
      </Typography>

      <Stack direction="row" spacing={2} pt={4}>
        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#tangible-media"
        >
          Tangible&nbsp;media
        </Button>

        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#web-development"
        >
          Web&nbsp;development
        </Button>
      </Stack>
    </FullHeaderPartial>
  );
}
