import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import Image from "next/image";

import javaLogoImage from "@/domains/about-page/assets/certifications/java/logo.jpg";
import javaOcaImage from "@/domains/about-page/assets/certifications/java/oca.png";
import phpLogoImage from "@/domains/about-page/assets/certifications/php/logo.png";
import phpZceImage from "@/domains/about-page/assets/certifications/php/zce.jpg";

import * as S from "./styles";

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
                src={javaOcaImage.src}
                width={javaOcaImage.width}
                height={javaOcaImage.height}
                style={{
                  width: javaOcaImage.width,
                  height: javaOcaImage.height,
                }}
              />
            </p>
          </div>
        </SplitItemPartial>
        <SplitItemPartial>
          <S.Logo
            alt="Duke - The Java Mascot"
            src={javaLogoImage.src}
            width={javaLogoImage.width}
            height={javaLogoImage.height}
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
              <Image
                alt="Zend Certified Engineer"
                src={phpZceImage.src}
                width={phpZceImage.width}
                height={phpZceImage.height}
                style={{
                  width: phpZceImage.width,
                  height: phpZceImage.height,
                }}
              />
            </p>
          </div>
        </SplitItemPartial>

        <SplitItemPartial>
          <S.Logo
            alt="ElePHPant"
            src={phpLogoImage.src}
            width={phpLogoImage.width}
            height={phpLogoImage.height}
          />
        </SplitItemPartial>
      </SplitPartial>
    </Group>
  );
}
