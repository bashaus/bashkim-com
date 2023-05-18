import { Brick } from "@bashkim-com/design-system";
import type { Case_Study } from "@bashkim-com/prismic-dal";
import Link from "next/link";

export type PortfolioCaseStudyBrickProps = {
  caseStudy: Case_Study;
};

export const PortfolioCaseStudyBrick = ({
  caseStudy,
}: PortfolioCaseStudyBrickProps) => (
  <Link href={`/portfolio/${caseStudy._meta.uid}`}>
    <Brick
      title={caseStudy.meta_title ?? ""}
      description={caseStudy.meta_description ?? ""}
      icon={caseStudy.image_icon.url}
    />
  </Link>
);
