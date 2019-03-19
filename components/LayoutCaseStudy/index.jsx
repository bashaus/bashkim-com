import PropTypes from 'prop-types';
import React from 'react';

import LayoutDefault from '%components/LayoutDefault';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';
import MetaDescription from '%components/MetaDescription';
import MetaImage from '%components/MetaImage';
import MetaKeywords from '%components/MetaKeywords';
import MetaTitle from '%components/MetaTitle';
import PartialHeaderImage from '%components/PartialHeaderImage';
import PartialTitle from '%components/PartialTitle';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';

export default function LayoutCaseStudy(props) {
  const { caseStudy, children } = props;

  return (
    <LayoutDefault backButton={MenuBackButtonPortfolioImpl} theme="portfolio">
      <MetaTitle content={caseStudy.meta.title} />
      <MetaDescription content={caseStudy.meta.description} />
      <MetaKeywords content={caseStudy.meta.keywords} />
      <MetaImage image={caseStudy.images.poster} />

      <article itemScope itemType="http://schema.org/CreativeWork">
        <PartialHeaderImage
          id="LayoutCaseStudy-Header"
          imageDesktop={caseStudy.images.headerDesktop}
          imageMobile={caseStudy.images.headerMobile}
        />

        <section className="group">
          <PartialTitle title={caseStudy.meta.title} image={caseStudy.images.icon}>
            { caseStudy.meta.description }
          </PartialTitle>
        </section>

        {children}
      </article>
    </LayoutDefault>
  );
}

LayoutCaseStudy.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
  children: PropTypes.node.isRequired,
};
