import { RichTextFormatter, Tile } from "@bashkim-com/design-system";
import type {
  Case_Study,
  Portfolio_PageFeatured,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Link from "next/link";

import * as S from "./PortfolioFeaturedCaseStudies.styles";

export type PortfolioFeaturedCaseStudiesProps = {
  featured: Array<Portfolio_PageFeatured>;
};

export const PortfolioFeaturedCaseStudies = ({
  featured,
}: PortfolioFeaturedCaseStudiesProps) => (
  <S.PortfolioFeaturedCaseStudies>
    {featured.map((feature) => {
      const title = feature.featured_title;
      const description = feature.featured_description;
      const caseStudy = feature.featured_case_study as Case_Study;

      return (
        <S.PortfolioFeaturedCaseStudy key={caseStudy._meta.id}>
          <S.Details>
            <RichTextFormatter>
              <PrismicRichText render={title} />
              <PrismicRichText render={description} />
            </RichTextFormatter>
          </S.Details>

          <Link href={`/portfolio/${caseStudy._meta.uid}`}>
            <S.Tile>
              <Tile
                title={caseStudy.meta_title}
                description={caseStudy.meta_description}
                icon={caseStudy.image_icon.url}
                poster={caseStudy.image_poster.url}
              />
            </S.Tile>
          </Link>
        </S.PortfolioFeaturedCaseStudy>
      );
    })}
  </S.PortfolioFeaturedCaseStudies>
);
