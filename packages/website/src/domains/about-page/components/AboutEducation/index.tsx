import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";

import qutGardensPointImage from "@/domains/about-page/assets/education/qut/gardens-point.jpg";
import qutLogoImage from "@/domains/about-page/assets/education/qut/logo.jpg";
import uqBackgroundImage from "@/domains/about-page/assets/education/uq/background.jpg";
import uqLogoImage from "@/domains/about-page/assets/education/uq/logo.png";

import * as S from "./styles";

export default function AboutEducation() {
  return (
    <Group>
      <SubtitlePartial>
        <h2>Education</h2>
      </SubtitlePartial>

      <SplitPartial index={0}>
        <SplitItemPartial>
          <div>
            <h3>Postgraduate</h3>
            <p>University of Queensland</p>
            <p>
              <time dateTime="2017">2017</time>
            </p>
            <p>
              Masters of
              <br />
              Interaction&nbsp;Design
            </p>
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
            <h3>Undergraduate</h3>
            <p>Queensland University of Technology</p>
            <p>
              <time dateTime="2005">2005</time>
              <span> to </span>
              <time dateTime="2009">2009</time>
            </p>
            <p>
              Bachelor of
              <br />
              Information&nbsp;Technology
            </p>
            <p>
              Majoring&nbsp;in
              <br />
              Web&nbsp;Services and&nbsp;Applications
            </p>
          </div>

          <div>
            <h3>Undergraduate</h3>
            <p>Queensland University of Technology</p>
            <p>
              <time dateTime="2005">2005</time>
              <span> to </span>
              <time dateTime="2009">2009</time>
            </p>
            <p>
              Bachelor of
              <br />
              Creative&nbsp;Industries
            </p>
            <p>
              Majoring&nbsp;in
              <br />
              Communication&nbsp;Design
            </p>
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
