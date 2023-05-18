import { SubtitlePartial } from "@bashkim-com/design-system";
import type {
  Case_Study,
  Portfolio_PagePortfolio_CategoriesPortfoliocategoryslicetype,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import { PortfolioCaseStudyBrick } from "../PortfolioCaseStudyBrick/PortfolioCaseStudyBrick";
import styles from "./PortfolioCategory.module.scss";

export type PortfolioCategoryProps = {
  portfolioCategory: Portfolio_PagePortfolio_CategoriesPortfoliocategoryslicetype;
};

export const PortfolioCategory = ({
  portfolioCategory,
}: PortfolioCategoryProps) => {
  const { fields } = portfolioCategory;
  const {
    portfolio_category_slug: slug,
    portfolio_category_title: title,
    portfolio_category_description: description,
  } = portfolioCategory.primary ?? {};

  return (
    <>
      <SubtitlePartial id={slug ?? ""}>
        <PrismicRichText render={title} />
        <PrismicRichText render={description} />
      </SubtitlePartial>

      {fields && (
        <ul className={styles["CaseStudies"]}>
          {fields.map(({ portfolio_category_case_study }) => {
            const caseStudy = portfolio_category_case_study as Case_Study;

            return (
              <li className={styles["CaseStudy"]} key={caseStudy._meta.uid}>
                <PortfolioCaseStudyBrick caseStudy={caseStudy} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
