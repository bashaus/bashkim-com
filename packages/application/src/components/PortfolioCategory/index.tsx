import { SubtitlePartial } from "@bashkim-com/design-system";
import {
  CaseStudyContentType,
  PortfolioCategorySliceType,
  PrismicRichText,
} from "@bashkim-com/prismic";

import { PortfolioCaseStudyBrick } from "%components/PortfolioCaseStudyBrick";

import * as S from "./styles";

export type PortfolioCategoryProps = {
  portfolioCategory: PortfolioCategorySliceType;
};

export const PortfolioCategory = ({
  portfolioCategory,
}: PortfolioCategoryProps): JSX.Element => (
  <>
    <SubtitlePartial id={portfolioCategory.primary.portfolio_category_slug}>
      <PrismicRichText
        render={portfolioCategory.primary.portfolio_category_title}
      />
      <PrismicRichText
        render={portfolioCategory.primary.portfolio_category_description}
      />
    </SubtitlePartial>

    <S.CaseStudies>
      {portfolioCategory.fields.map(
        ({ portfolio_category_case_study: caseStudy }) => (
          <S.CaseStudy key={caseStudy._meta.uid}>
            <PortfolioCaseStudyBrick
              caseStudy={caseStudy as CaseStudyContentType}
            />
          </S.CaseStudy>
        )
      )}
    </S.CaseStudies>
  </>
);
