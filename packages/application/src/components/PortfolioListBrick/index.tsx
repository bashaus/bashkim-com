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

export default PortfolioListBrick;
