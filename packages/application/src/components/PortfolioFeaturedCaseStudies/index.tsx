import Link from "next/link";
import { RichText } from "prismic-reactjs";
import type { PortfolioPageContentTypePageTabFeatured } from "@bashkim-com/prismic";

import Tile from "%components/Tile";

import LinkResolver from "%prismic/LinkResolver";

import styles from "./styles.module.scss";

type PortfolioFeaturedCaseStudiesProps = {
  featured: Array<PortfolioPageContentTypePageTabFeatured>;
};

const PortfolioFeaturedCaseStudies = ({
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
            {title && RichText.render(title, LinkResolver)}
            {description && RichText.render(description, LinkResolver)}
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

export default PortfolioFeaturedCaseStudies;
