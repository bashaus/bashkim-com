import Link from "next/link";
import type { PortfolioPageContentTypePageTabFeatured } from "@bashkim-com/prismic";

import { Tile } from "%components/Tile";

import { PrismicRichText } from "%prismic/helpers/RichText";

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
        <li className={styles.item} key={caseStudy._meta.id}>
          <div className={styles.details}>
            <PrismicRichText render={title} />
            <PrismicRichText render={description} />
          </div>

          <Link
            href="/portfolio/[caseStudySlug]"
            as={`/portfolio/${caseStudy._meta.uid}`}
          >
            <a className={styles.tile}>
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
