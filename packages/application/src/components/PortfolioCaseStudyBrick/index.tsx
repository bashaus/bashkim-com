import { Brick } from "@bashkim-com/design-system";
import type { CaseStudyContentType } from "@bashkim-com/prismic";
import Link from "next/link";

export type PortfolioCaseStudyBrickProps = {
  caseStudy: CaseStudyContentType;
};

export const PortfolioCaseStudyBrick = ({
  caseStudy,
}: PortfolioCaseStudyBrickProps) => (
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
