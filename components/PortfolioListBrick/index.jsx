import Link from 'next/link';
import React from 'react';

import Brick from '%components/Brick';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';

export default function PortfolioListBrick(props) {
  const { caseStudy } = props;

  return (
    <Link href="/portfolio/[caseStudySlug]" as={`/portfolio/${caseStudy.uid}`}>
      <a>
        <Brick
          title={caseStudy.data.meta_title}
          description={caseStudy.data.meta_description}
          icon={caseStudy.data.image_icon.url}
        />
      </a>
    </Link>
  );
}

PortfolioListBrick.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
};
