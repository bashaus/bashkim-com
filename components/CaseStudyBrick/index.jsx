import React from 'react';
import CaseStudyPropType from '%prop-types/CaseStudy';

import Brick from '%components/Brick';

export default function CaseStudyBrick(props) {
  const { caseStudy } = props;

  return (
    <Brick
      title={caseStudy.meta.title}
      description={caseStudy.meta.description}
      icon={caseStudy.images.icon}
      href={`/portfolio/${caseStudy.slug}`}
    />
  );
}

CaseStudyBrick.propTypes = {
  caseStudy: CaseStudyPropType.isRequired,
};
