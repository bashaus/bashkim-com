import FullHeaderPartial from "@bashkim-com/design-system/FullHeaderPartial";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import * as S from "./styles";

const VideoBackground = dynamic(
  () => import("@bashkim-com/design-system/VideoBackground"),
  { ssr: false },
);

export default function HomeHello() {
  const t = useTranslations("HomeHello");

  return (
    <FullHeaderPartial
      background={<VideoBackground url="https://vimeo.com/1067276219" />}
    >
      <S.Logo />
      <Typography variant="h5" component="p">
        {t("subtitle")}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ paddingTop: 4 }}>
        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#tangible-media"
        >
          {t("tangibleMediaButtonLabel")}
        </Button>

        <Button
          variant="outlined"
          color="currentColor"
          href="/portfolio#web-development"
        >
          {t("webDevelopmentButtonLabel")}
        </Button>
      </Stack>
    </FullHeaderPartial>
  );
}
