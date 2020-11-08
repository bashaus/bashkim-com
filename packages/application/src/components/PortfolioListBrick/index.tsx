import Link from "next/link";
import React from "react";
import { CaseStudyContentType } from "@bashkim-com/prismic";

import Brick from "%components/Brick";

type PortfolioListBrickProps = {
  caseStudy: CaseStudyContentType;
};

const PortfolioListBrick = ({
  caseStudy,
}: PortfolioListBrickProps): JSX.Element => (
  <Link
    href="/portfolio/[caseStudySlug]"
    as={`/portfolio/${caseStudy._meta.uid}`}
  >
    <a>
      <Brick
        title={caseStudy.meta_title}
        description={caseStudy.meta_description}
        icon={caseStudy.image_icon.url}
      />
    </a>
  </Link>
);

export default PortfolioListBrick;
