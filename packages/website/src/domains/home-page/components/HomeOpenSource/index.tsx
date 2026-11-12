import BrowserWindowContent from "@bashkim-com/design-system/BrowserWindowContent";
import BrowserWindowTitleBar from "@bashkim-com/design-system/BrowserWindowTitleBar";
import CodeHighlight from "@bashkim-com/design-system/CodeHighlight";
import FlipCard from "@bashkim-com/design-system/FlipCard";
import FlipCardFaceBack from "@bashkim-com/design-system/FlipCardFaceBack";
import FlipCardFaceFront from "@bashkim-com/design-system/FlipCardFaceFront";
import Group from "@bashkim-com/design-system/Group";
import ScrollLockContainer from "@bashkim-com/design-system/ScrollLockContainer";
import SquareLogo from "@bashkim-com/design-system/SquareLogo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";

import { getSourcePath } from "@/libraries/app/navigation";

import image from "./background.png";

const codeBlock = `
"use client";

import Card from "@mui/material/Card";

export default function HomePage() {
  return (
    <Card>
      Digital Technologist
      based in Barcelona.
    </Card>
  );
}
`;

export default function HomeOpenSource() {
  const locale = useLocale();
  const t = useTranslations("HomeOpenSource");

  return (
    <Group>
      <Container>
        <ScrollLockContainer>
          <Grid container sx={{ spacing: 2, width: "100%" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h3" gutterBottom>
                {t("title")}
              </Typography>

              <Typography gutterBottom>{t("paragraph1")}</Typography>
              <Typography gutterBottom>{t("paragraph2")}</Typography>

              <Box sx={{ paddingTop: 3 }}>
                <Button variant="outlined" href={getSourcePath({ locale })}>
                  {t("learnMoreButtonLabel")}
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FlipCard maxWidth={400} height={400}>
                <FlipCardFaceFront>
                  <BrowserWindowTitleBar>
                    {t("primaryBrowserTitle")}
                  </BrowserWindowTitleBar>

                  <BrowserWindowContent
                    sx={{
                      backgroundImage: `url(${image.src})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                  >
                    <SquareLogo color="#FFF" width={192} height={192} />
                  </BrowserWindowContent>
                </FlipCardFaceFront>

                <FlipCardFaceBack>
                  <BrowserWindowTitleBar>
                    {t("flippedBrowserTitle")}
                  </BrowserWindowTitleBar>

                  <CardContent
                    sx={{
                      flex: 1,
                      overflow: "hidden",
                      width: "100%",
                    }}
                  >
                    <CodeHighlight code={codeBlock.trimStart()} />
                  </CardContent>
                </FlipCardFaceBack>
              </FlipCard>
            </Grid>
          </Grid>
        </ScrollLockContainer>
      </Container>
    </Group>
  );
}
