import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import Image from "next/image";

import JavaLogoImage from "../../assets/certifications/java/logo.jpg";
import JavaOcaImage from "../../assets/certifications/java/oca.png";
import PhpLogoImage from "../../assets/certifications/php/logo.png";
import PhpZceImage from "../../assets/certifications/php/zce.jpg";
import styles from "./styles.module.scss";

export default function AboutCertifications() {
  return (
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
              <Image
                alt="Oracle Certified Associate"
                src={JavaOcaImage.src}
                width={JavaOcaImage.width}
                height={JavaOcaImage.height}
              />
            </p>
          </div>
        </SplitItemPartial>
        <SplitItemPartial>
          <Image
            className={styles["Logo"]}
            alt="Duke - The Java Mascot"
            src={JavaLogoImage.src}
            width={JavaLogoImage.width}
            height={JavaLogoImage.height}
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
                <Image
                  alt="Zend Certified Engineer"
                  src={PhpZceImage.src}
                  width={PhpZceImage.width}
                  height={PhpZceImage.height}
                />
              </a>
            </p>
          </div>
        </SplitItemPartial>

        <SplitItemPartial>
          <Image
            className={styles["Logo"]}
            alt="ElePHPant"
            src={PhpLogoImage.src}
            width={PhpLogoImage.width}
            height={PhpLogoImage.height}
          />
        </SplitItemPartial>
      </SplitPartial>
    </Group>
  );
}
