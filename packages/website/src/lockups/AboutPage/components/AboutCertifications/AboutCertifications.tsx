import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";

import JavaLogoImage from "../../assets/certifications/java/logo.jpg";
import JavaOcaImage from "../../assets/certifications/java/oca.png";
import PhpLogoImage from "../../assets/certifications/php/logo.png";
import PhpZceImage from "../../assets/certifications/php/zce.jpg";
import styles from "./AboutCertifications.module.scss";

export const AboutCertifications = () => (
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
            <img alt="Oracle Certified Associate" src={JavaOcaImage.src} />
          </p>
        </div>
      </SplitItemPartial>
      <SplitItemPartial>
        <img
          className={styles["Logo"]}
          alt="Duke - The Java Mascot"
          src={JavaLogoImage.src}
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
              <img alt="Zend Certified Engineer" src={PhpZceImage.src} />
            </a>
          </p>
        </div>
      </SplitItemPartial>

      <SplitItemPartial>
        <img
          className={styles["Logo"]}
          alt="ElePHPant"
          src={PhpLogoImage.src}
        />
      </SplitItemPartial>
    </SplitPartial>
  </Group>
);
