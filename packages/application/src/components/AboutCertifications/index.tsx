import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const AboutCertifications = (): JSX.Element => (
  <Group>
    <SubtitlePartial>
      <h2>Certifications</h2>
    </SubtitlePartial>

    <SplitPartial index={0}>
      <SplitItemPartial>
        <div>
          <h3>Java 8</h3>
          <p>
            Oracle Certified Associate
            <br />
            <time dateTime="2012-08-23">April 2016</time>
          </p>
          <p>
            <img
              alt="Oracle Certified Associate"
              src="/static/images/about/certifications/java/oca.png"
            />
          </p>
        </div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage="/static/images/about/certifications/java/background.jpg">
        <img
          alt="Duke - The Java Mascot"
          src="/static/images/about/certifications/java/logo.jpg"
          className={styles.Logo}
        />
      </SplitItemPartial>
    </SplitPartial>

    <SplitPartial index={1}>
      <SplitItemPartial>
        <div>
          <h3>PHP 5.3</h3>
          <p>
            Zend Certified Engineer
            <br />
            <time dateTime="2012-08-23">August 2012</time>
          </p>
          <p>
            <a
              href="https://www.zend.com/en/yellow-pages/ZEND020625"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="Zend Certified Engineer"
                src="/static/images/about/certifications/php/zce.jpg"
              />
            </a>
          </p>
        </div>
      </SplitItemPartial>

      <SplitItemPartial backgroundImage="/static/images/about/certifications/php/background.jpg">
        <img
          alt="ElePHPant"
          className={styles.Logo}
          src="/static/images/about/certifications/php/logo.png"
        />
      </SplitItemPartial>
    </SplitPartial>
  </Group>
);
