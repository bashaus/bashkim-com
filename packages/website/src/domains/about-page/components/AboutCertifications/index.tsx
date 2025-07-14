import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import Typography from "@mui/material/Typography";
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
        <Typography variant="h4" component="h2">
          Certifications
        </Typography>
      </SubtitlePartial>

      <SplitPartial index={0}>
        <SplitItemPartial>
          <div>
            <Typography variant="h6" component="h3" gutterBottom>
              Java 8
            </Typography>

            <Typography gutterBottom>
              Oracle Certified Associate
              <br />
              <time dateTime="2012-08-23">April 2016</time>
            </Typography>

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
            <Typography variant="h6" component="h3" gutterBottom>
              PHP 5.3
            </Typography>

            <Typography gutterBottom>
              Zend Certified Engineer
              <br />
              <time dateTime="2012-08-23">August 2012</time>
            </Typography>

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
