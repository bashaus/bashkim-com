import BrowserWindowContent from "@bashkim-com/design-system/BrowserWindowContent";
import BrowserWindowTitleBar from "@bashkim-com/design-system/BrowserWindowTitleBar";
import CodeHighlight from "@bashkim-com/design-system/CodeHighlight";
import FlipCard from "@bashkim-com/design-system/FlipCard";
import FlipCardContainer from "@bashkim-com/design-system/FlipCardContainer";
import FlipCardFaceBack from "@bashkim-com/design-system/FlipCardFaceBack";
import FlipCardFaceFront from "@bashkim-com/design-system/FlipCardFaceFront";
import Group from "@bashkim-com/design-system/Group";
import SquareLogo from "@bashkim-com/design-system/SquareLogo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { getSourcePath } from "@/libraries/app/navigation";

import image from "./background.png";

const codeBlock = `
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
  return (
    <Group>
      <Container>
        <FlipCardContainer>
          <Grid container width="100%" spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h3" gutterBottom>
                Open source
              </Typography>

              <Typography gutterBottom>
                Like what you see? I&apos;ve put together a breakdown of the
                tools and tech that power this site, so you can get a
                behind-the-scenes look at how everything came together.
              </Typography>

              <Typography gutterBottom>
                Whether you&apos;re curious about the design choices, the
                frameworks, or just want to see what goes into building a site
                like this, you&apos;ll find all the details
                laid&nbsp;out&nbsp;here.
              </Typography>

              <Box pt={3}>
                <Button variant="outlined" href={getSourcePath()}>
                  Learn more
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FlipCard maxWidth={400} height={400}>
                <FlipCardFaceFront>
                  <BrowserWindowTitleBar>bashkim.com</BrowserWindowTitleBar>

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
                    view-source:bashkim.com
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
        </FlipCardContainer>
      </Container>
    </Group>
  );
}
