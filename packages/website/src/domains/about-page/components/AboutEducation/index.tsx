import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import Image from "next/image";

import QutGardensPointImage from "../../assets/education/qut/gardens-point.jpg";
import QutLogoImage from "../../assets/education/qut/logo.jpg";
import UqBackgroundImage from "../../assets/education/uq/background.jpg";
import UqLogoImage from "../../assets/education/uq/logo.png";
import styles from "./styles.module.scss";

export const AboutEducation = () => (
  <Group data-testid="AboutEducation">
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

      <SplitItemPartial backgroundImage={UqBackgroundImage.src}>
        <div>
          <Image
            className={styles["Logo"]}
            alt="University of Queensland"
            src={UqLogoImage.src}
            width={UqLogoImage.width}
            height={UqLogoImage.height}
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

      <SplitItemPartial backgroundImage={QutGardensPointImage.src}>
        <div>
          <Image
            className={styles["Logo"]}
            alt="Queensland University of Technology"
            src={QutLogoImage.src}
            width={QutLogoImage.width}
            height={QutLogoImage.height}
          />
        </div>
      </SplitItemPartial>
    </SplitPartial>
  </Group>
);
