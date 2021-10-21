import { SubtitlePartial } from "@bashkim-com/design-system";
import {
  CaseStudyContentType,
  PortfolioCategorySliceType,
  PrismicRichText,
} from "@bashkim-com/prismic";
import { DeepPartial } from "utility-types";

import { PortfolioCaseStudyBrick } from "%components/PortfolioCaseStudyBrick";

import styles from "./styles.module.scss";

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

    <ul className={styles.CaseStudies}>
      {portfolioCategory.fields.map((portfolioCaseStudy) => {
        const caseStudy: DeepPartial<CaseStudyContentType> =
          portfolioCaseStudy.portfolio_category_case_study;

        return (
          <li key={caseStudy._meta.uid}>
            <PortfolioCaseStudyBrick
              caseStudy={caseStudy as CaseStudyContentType}
            />
          </li>
        );
      })}
    </ul>
  </>
);
