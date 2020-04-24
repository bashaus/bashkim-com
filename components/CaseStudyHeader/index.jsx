import React from 'react';

import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import PartialHeaderImage from '%components/PartialHeaderImage';
import PartialTitle from '%components/PartialTitle';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';

import styles from './styles.module.scss';

const CaseStudyHeader = ({ caseStudy }) => (
  <>
    <PartialHeaderImage
      id="CaseStudyPage-Header"
      imageDesktop={caseStudy.data.image_header_desktop.url}
      imageMobile={caseStudy.data.image_header_mobile.url}
    />

    <section className="group">
      <PartialTitle
        title={caseStudy.data.meta_title}
        image={caseStudy.data.image_icon.url}
      >
        { caseStudy.data.meta_description }
      </PartialTitle>
    </section>

    <section className="group-alternate">
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

CaseStudyHeader.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
};

export default CaseStudyHeader;
