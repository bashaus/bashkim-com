import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import qutGardensPointImage from "@/domains/about-page/assets/education/qut/gardens-point.jpg";
import qutLogoImage from "@/domains/about-page/assets/education/qut/logo.jpg";
import uqBackgroundImage from "@/domains/about-page/assets/education/uq/background.jpg";
import uqLogoImage from "@/domains/about-page/assets/education/uq/logo.png";

import * as S from "./styles";

export default function AboutEducation() {
  return (
    <Group>
      <SubtitlePartial>
        <Typography variant="h4" component="h2">
          Education
        </Typography>
      </SubtitlePartial>

      <SplitPartial index={0}>
        <SplitItemPartial>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box flex={1}>
              <Typography variant="h6" component="h3" gutterBottom>
                Postgraduate
              </Typography>

              <Typography gutterBottom>University of Queensland</Typography>
              <Typography gutterBottom>
                <time dateTime="2017">2017</time>
              </Typography>
              <Typography gutterBottom>
                Masters of
                <br />
                Interaction&nbsp;Design
              </Typography>
            </Box>
          </Stack>
        </SplitItemPartial>

        <SplitItemPartial backgroundImage={uqBackgroundImage.src}>
          <S.Logo
            alt="University of Queensland"
            src={uqLogoImage.src}
            width={uqLogoImage.width}
            height={uqLogoImage.height}
          />
        </SplitItemPartial>
      </SplitPartial>

      <SplitPartial index={1}>
        <SplitItemPartial>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Undergraduate
              </Typography>

              <Typography gutterBottom>
                Queensland University of Technology
              </Typography>

              <Typography gutterBottom>
                <time dateTime="2005">2005</time>
                <span> to </span>
                <time dateTime="2009">2009</time>
              </Typography>

              <Typography gutterBottom>
                Bachelor of
                <br />
                Information&nbsp;Technology
              </Typography>

              <Typography gutterBottom>
                Majoring&nbsp;in
                <br />
                Web&nbsp;Services and&nbsp;Applications
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Undergraduate
              </Typography>

              <Typography gutterBottom>
                Queensland University of Technology
              </Typography>

              <Typography gutterBottom>
                <time dateTime="2005">2005</time>
                <span> to </span>
                <time dateTime="2009">2009</time>
              </Typography>

              <Typography gutterBottom>
                Bachelor of
                <br />
                Creative&nbsp;Industries
              </Typography>

              <Typography gutterBottom>
                Majoring&nbsp;in
                <br />
                Communication&nbsp;Design
              </Typography>
            </Box>
          </Stack>
        </SplitItemPartial>

        <SplitItemPartial backgroundImage={qutGardensPointImage.src}>
          <S.Logo
            alt="Queensland University of Technology"
            src={qutLogoImage.src}
            width={qutLogoImage.width}
            height={qutLogoImage.height}
          />
        </SplitItemPartial>
      </SplitPartial>
    </Group>
  );
}
