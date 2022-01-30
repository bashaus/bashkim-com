import { RichTextFormatter, Tile } from "@bashkim-com/design-system";
import {
  PortfolioPageContentTypePageTabFeatured,
  PrismicRichText,
} from "@bashkim-com/prismic";
import Link from "next/link";

import * as S from "./styles";

export type PortfolioFeaturedCaseStudiesProps = {
  featured: Array<PortfolioPageContentTypePageTabFeatured>;
};

export const PortfolioFeaturedCaseStudies = ({
  featured,
}: PortfolioFeaturedCaseStudiesProps): JSX.Element => (
  <S.PortfolioFeaturedCaseStudies>
    {featured.map(
      ({
        featured_title: title,
        featured_description: description,
        featured_case_study: caseStudy,
      }) => (
        <S.PortfolioFeaturedCaseStudy key={caseStudy._meta.id}>
          <S.Details>
            <RichTextFormatter>
              <PrismicRichText render={title} />
              <PrismicRichText render={description} />
            </RichTextFormatter>
          </S.Details>

          <Link
            href="/portfolio/[caseStudySlug]"
            as={`/portfolio/${caseStudy._meta.uid}`}
            passHref
          >
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
      )
    )}
  </S.PortfolioFeaturedCaseStudies>
);
