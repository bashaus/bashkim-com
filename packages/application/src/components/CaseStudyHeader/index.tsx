import type { CaseStudyContentType } from "@bashkim-com/prismic";

import { CaseStudyDetails } from "%components/CaseStudyDetails";
import { CaseStudyTechnologies } from "%components/CaseStudyTechnologies";
import { PartialHeaderImage } from "%partials/HeaderImage";
import { PartialTitle } from "%partials/Title";
import { PartialSubtitle } from "%partials/Subtitle";

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

    <section className="group">
      <PartialTitle image={caseStudy.image_icon.url}>
        <h1>{caseStudy.meta_title}</h1>
        <p>{caseStudy.meta_description}</p>
      </PartialTitle>
    </section>

    <section className="group-alternate">
      <PartialSubtitle>
        <h2>Project details</h2>
      </PartialSubtitle>

      <div className={styles.CaseStudyHeader}>
        <div className={styles.details}>
          <CaseStudyDetails caseStudy={caseStudy} />
        </div>
        <div className={styles.technologies}>
          <CaseStudyTechnologies caseStudy={caseStudy} />
        </div>
      </div>
    </section>
  </>
);
