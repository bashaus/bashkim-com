import Link from "next/link";

import { RichTextFormatter, Tile } from "@bashkim-com/design-system";
import {
  PrismicRichText,
  PortfolioPageContentTypePageTabFeatured,
} from "@bashkim-com/prismic";

import styles from "./styles.module.scss";

export type PortfolioFeaturedCaseStudiesProps = {
  featured: Array<PortfolioPageContentTypePageTabFeatured>;
};

export const PortfolioFeaturedCaseStudies = ({
  featured,
}: PortfolioFeaturedCaseStudiesProps): JSX.Element => (
  <ul className={styles.PortfolioFeaturedCaseStudies}>
    {featured.map((feature) => {
      const {
        featured_title: title,
        featured_description: description,
        featured_case_study: caseStudy,
      } = feature;

      return (
        <li className={styles.Item} key={caseStudy._meta.id}>
          <div className={styles.Details}>
            <RichTextFormatter>
              <PrismicRichText render={title} />
              <PrismicRichText render={description} />
            </RichTextFormatter>
          </div>

          <Link
            href="/portfolio/[caseStudySlug]"
            as={`/portfolio/${caseStudy._meta.uid}`}
          >
            <a className={styles.Tile}>
              <Tile
                title={caseStudy.meta_title}
                description={caseStudy.meta_description}
                icon={caseStudy.image_icon.url}
                poster={caseStudy.image_poster.url}
              />
            </a>
          </Link>
        </li>
      );
    })}
  </ul>
);
