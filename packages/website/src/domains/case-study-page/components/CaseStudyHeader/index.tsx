import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
  TitlePartial,
} from "@bashkim-com/design-system";
import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";

import CaseStudyDetails from "../CaseStudyDetails";
import CaseStudyTechnologies from "../CaseStudyTechnologies";
import styles from "./styles.module.scss";

export type CaseStudyHeaderProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <>
      <PageHeaderPartial
        id="CaseStudyPage-Header"
        imageDesktop={caseStudy.image_header_desktop?.url}
        imageMobile={caseStudy.image_header_mobile?.url}
      />

      <Group>
        <TitlePartial image={caseStudy.image_icon.url}>
          <h1>{caseStudy.meta_title}</h1>
          <p>{caseStudy.meta_description}</p>
        </TitlePartial>
      </Group>

      <Group design={GroupDesign.ALTERNATE}>
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
