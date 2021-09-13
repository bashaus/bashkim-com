import { DeepPartial } from "utility-types";
import { PartialSubtitle } from "@bashkim-com/design-system";
import type {
  CaseStudyContentType,
  PortfolioCategorySliceType,
} from "@bashkim-com/prismic";

import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

import { PortfolioCaseStudyBrick } from "%components/PortfolioCaseStudyBrick";

import styles from "./styles.module.scss";

export type PortfolioCategoryProps = {
  portfolioCategory: PortfolioCategorySliceType;
};

export const PortfolioCategory = ({
  portfolioCategory,
}: PortfolioCategoryProps): JSX.Element => (
  <>
    <PartialSubtitle id={portfolioCategory.primary.portfolio_category_slug}>
      <PrismicRichText
        render={portfolioCategory.primary.portfolio_category_title}
      />
      <PrismicRichText
        render={portfolioCategory.primary.portfolio_category_description}
      />
    </PartialSubtitle>

    <ul className={styles.CaseStudies}>
      {portfolioCategory.fields.map((portfolioCaseStudy) => {
        const caseStudy: DeepPartial<CaseStudyContentType> =
          portfolioCaseStudy.portfolio_category_case_study;

        return (
          <li key={caseStudy._meta.uid}>
            <PortfolioCaseStudyBrick caseStudy={caseStudy} />
          </li>
        );
      })}
    </ul>
  </>
);
