import {
  Group,
  PartialSplit,
  PartialSplitItem,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const AboutEducation = (): JSX.Element => (
  <Group>
    <PartialSubtitle>
      <h2>Education</h2>
    </PartialSubtitle>

    <PartialSplit index={0}>
      <PartialSplitItem>
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
      </PartialSplitItem>

      <PartialSplitItem backgroundImage="/static/images/about/education/uq/background.jpg">
        <div>
          <img
            alt=""
            src="/static/images/about/education/uq/logo.png"
            className={styles.Logo}
          />
        </div>
      </PartialSplitItem>
    </PartialSplit>

    <PartialSplit index={1}>
      <PartialSplitItem>
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
      </PartialSplitItem>

      <PartialSplitItem backgroundImage="/static/images/about/education/qut/gardens-point.jpg">
        <div>
          <img
            alt=""
            src="/static/images/about/education/qut/logo.jpg"
            className={styles.Logo}
          />
        </div>
      </PartialSplitItem>
    </PartialSplit>
  </Group>
);
