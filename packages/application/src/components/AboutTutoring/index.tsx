import {
  Group,
  PartialSplit,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const AboutTutoring = (): JSX.Element => (
  <Group>
    <PartialSubtitle>
      <h2>Tutoring</h2>
    </PartialSubtitle>

    <PartialSplit index={1}>
      <PartialSplit.Item>
        <div>
          <h3>Queensland&nbsp;University of Technology</h3>
          <p>Brisbane, Australia</p>
          <p>
            <time dateTime="2008-02">February 2008</time>
            <span> to </span>
            <br />
            <time dateTime="2011-02">February 2011</time>
          </p>
        </div>

        <div>
          <h3>Creative Industries</h3>
          <p>Introduction to Web&nbsp;Design</p>
        </div>

        <div>
          <h3>Science &amp; Technology</h3>
          <p>
            Programming
            <br />
            Interaction Design
          </p>
        </div>

        <div>
          <h3>International College</h3>
          <p>
            Computing Studies
            <br />
            Tertiary Preparation
          </p>
        </div>
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/education/qut/kelvin-grove.jpg">
        <div>
          <img
            alt=""
            src="/static/images/about/education/qut/logo.jpg"
            className={styles.logo}
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>
  </Group>
);
