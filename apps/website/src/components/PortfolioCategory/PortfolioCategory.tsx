import { SubtitlePartial } from "@bashkim-com/design-system";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type {
  Case_Study,
  Portfolio_PagePortfolio_CategoriesPortfoliocategoryslicetype,
} from "@bashkim-com/prismic-dal";

import { PortfolioCaseStudyBrick } from "../PortfolioCaseStudyBrick/PortfolioCaseStudyBrick";

import * as S from "./PortfolioCategory.styles";

export type PortfolioCategoryProps = {
  portfolioCategory: Portfolio_PagePortfolio_CategoriesPortfoliocategoryslicetype;
};

export const PortfolioCategory = ({
  portfolioCategory,
}: PortfolioCategoryProps) => (
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
      {portfolioCategory.fields.map(({ portfolio_category_case_study }) => {
        const caseStudy = portfolio_category_case_study as Case_Study;

        return (
          <S.CaseStudy key={caseStudy._meta.uid}>
            <PortfolioCaseStudyBrick caseStudy={caseStudy} />
          </S.CaseStudy>
        );
      })}
    </S.CaseStudies>
  </>
);
