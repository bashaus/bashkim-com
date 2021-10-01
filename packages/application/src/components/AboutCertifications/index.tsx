import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";

// import JavaBackgroundImage from "%assets/images/about/certifications/java/background.jpg";
import JavaLogoImage from "%assets/images/about/certifications/java/logo.jpg";
import JavaOcaImage from "%assets/images/about/certifications/java/oca.png";
// import PhpBackgroundImage from "%assets/images/about/certifications/php/background.jpg";
import PhpLogoImage from "%assets/images/about/certifications/php/logo.png";
import PhpZceImage from "%assets/images/about/certifications/php/zce.jpg";

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
            <img alt="Oracle Certified Associate" src={JavaOcaImage.src} />
          </p>
        </div>
      </SplitItemPartial>
      <SplitItemPartial
      // backgroundImage={JavaBackgroundImage.src}
      >
        <img
          alt="Duke - The Java Mascot"
          src={JavaLogoImage.src}
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
              <img alt="Zend Certified Engineer" src={PhpZceImage.src} />
            </a>
          </p>
        </div>
      </SplitItemPartial>

      <SplitItemPartial
      // backgroundImage={PhpBackgroundImage.src}
      >
        <img alt="ElePHPant" className={styles.Logo} src={PhpLogoImage.src} />
      </SplitItemPartial>
    </SplitPartial>
  </Group>
);
