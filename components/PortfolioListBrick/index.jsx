import React from 'react';

import Brick from '%components/Brick';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';

export default function PortfolioListBrick(props) {
  const { caseStudy } = props;

  return (
    <Brick
      title={caseStudy.data.meta_title}
      description={caseStudy.data.meta_description}
      icon={caseStudy.data.image_icon.url}
      href={`/portfolio/${caseStudy.uid}`}
    />
  );
}

PortfolioListBrick.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
};
