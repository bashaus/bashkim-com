import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
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
          <div>
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
          </div>
        </SplitItemPartial>

        <SplitItemPartial backgroundImage={uqBackgroundImage.src}>
          <div>
            <S.Logo
              alt="University of Queensland"
              src={uqLogoImage.src}
              width={uqLogoImage.width}
              height={uqLogoImage.height}
            />
          </div>
        </SplitItemPartial>
      </SplitPartial>

      <SplitPartial index={1}>
        <SplitItemPartial>
          <div>
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
          </div>

          <div>
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
          </div>
        </SplitItemPartial>

        <SplitItemPartial backgroundImage={qutGardensPointImage.src}>
          <div>
            <S.Logo
              alt="Queensland University of Technology"
              src={qutLogoImage.src}
              width={qutLogoImage.width}
              height={qutLogoImage.height}
            />
          </div>
        </SplitItemPartial>
      </SplitPartial>
    </Group>
  );
}
