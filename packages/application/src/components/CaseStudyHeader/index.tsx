import type { CaseStudyContentType } from "@bashkim-com/prismic";

import { CaseStudyDetails } from "%components/CaseStudyDetails";
import { CaseStudyTechnologies } from "%components/CaseStudyTechnologies";
import {
  Group,
  GroupDesign,
  PartialHeaderImage,
  PartialTitle,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export type CaseStudyHeaderProps = {
  caseStudy: CaseStudyContentType;
};

export const CaseStudyHeader = ({
  caseStudy,
}: CaseStudyHeaderProps): JSX.Element => (
  <>
    <PartialHeaderImage
      id="CaseStudyPage-Header"
      imageDesktop={caseStudy.image_header_desktop?.url}
      imageMobile={caseStudy.image_header_mobile?.url}
    />

    <Group>
      <PartialTitle image={caseStudy.image_icon.url}>
        <h1>{caseStudy.meta_title}</h1>
        <p>{caseStudy.meta_description}</p>
      </PartialTitle>
    </Group>

    <Group design={GroupDesign.ALTERNATE}>
      <PartialSubtitle>
        <h2>Project details</h2>
      </PartialSubtitle>

      <div className={styles.CaseStudyHeader}>
        <div className={styles.Details}>
          <CaseStudyDetails caseStudy={caseStudy} />
        </div>
        <div className={styles.Technologies}>
          <CaseStudyTechnologies caseStudy={caseStudy} />
        </div>
      </div>
    </Group>
  </>
);
