import React from "react";
import { CaseStudyContentType } from "@bashkim-com/prismic";

import CaseStudyDetails from "%components/CaseStudyDetails";
import CaseStudyTechnologies from "%components/CaseStudyTechnologies";
import PartialHeaderImage from "%partials/HeaderImage";
import PartialTitle from "%partials/Title";

import styles from "./styles.module.scss";
import PartialSubtitle from "%partials/Subtitle";

type CaseStudyHeaderProps = {
  caseStudy: CaseStudyContentType;
};

const CaseStudyHeader = ({ caseStudy }: CaseStudyHeaderProps): JSX.Element => (
  <>
    <PartialHeaderImage
      id="CaseStudyPage-Header"
      imageDesktop={caseStudy.data.image_header_desktop.url}
      imageMobile={caseStudy.data.image_header_mobile.url}
    />

    <section className="group">
      <PartialTitle image={caseStudy.data.image_icon.url}>
        <h1>{caseStudy.data.meta_title}</h1>
        <p>{caseStudy.data.meta_description}</p>
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

export default CaseStudyHeader;
