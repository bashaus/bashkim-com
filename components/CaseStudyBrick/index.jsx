import React from 'react';
import CaseStudyPropType from 'propTypes/CaseStudy';

import PartialBrick from 'components/PartialBrick';

export default function PortfolioBrick(props) {
  const { caseStudy } = props;

  return (
    <PartialBrick
      title={caseStudy.meta.title}
      description={caseStudy.meta.description}
      icon={caseStudy.images.icon}
      href={`/portfolio/${caseStudy.slug}`}
    />
  );
}

PortfolioBrick.propTypes = {
  caseStudy: CaseStudyPropType.isRequired,
};
