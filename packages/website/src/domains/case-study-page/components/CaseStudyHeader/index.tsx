import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
  TitlePartial,
} from "@bashkim-com/design-system";
import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";
import Image from "next/image";

import CaseStudyDetails from "@/domains/case-study-page/components/CaseStudyDetails";
import CaseStudyTechnologies from "@/domains/case-study-page/components/CaseStudyTechnologies";

import styles from "./styles.module.scss";

export type CaseStudyHeaderProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <>
      <PageHeaderPartial
        imageDesktop={caseStudy.image_header_desktop?.url}
        imageMobile={caseStudy.image_header_mobile?.url}
      />

      <Group>
        <TitlePartial
          title={caseStudy.meta_title}
          description={caseStudy.meta_description}
          image={
            <Image
              src={caseStudy.image_icon.url}
              alt={caseStudy.image_icon.alt ?? ""}
              width={caseStudy.image_icon.dimensions.width}
              height={caseStudy.image_icon.dimensions.height}
            />
          }
        />
      </Group>

      <Group design={GroupDesign.Alternate}>
        <SubtitlePartial>
          <h2>Project details</h2>
        </SubtitlePartial>

        <div className={styles["CaseStudyHeader"]}>
          <div className={styles["CaseStudyDetails"]}>
            <CaseStudyDetails caseStudy={caseStudy} />
          </div>

          <div className={styles["CaseStudyTechnologies"]}>
            <CaseStudyTechnologies caseStudy={caseStudy} />
          </div>
        </div>
      </Group>
    </>
  );
}
