import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import Tile from '%components/Tile';
import LinkResolver from '%prismic/helpers/LinkResolver';

import styles from './styles.module.scss';

interface PortfolioFeaturedCaseStudiesProps {
  featured: Array<any>;
}

const PortfolioFeaturedCaseStudies = ({
  featured,
}: PortfolioFeaturedCaseStudiesProps): JSX.Element => (
  <ul className={styles.PortfolioFeaturedCaseStudies}>
    {featured.map((feature) => {
      const {
        featured_title: title,
        featured_description: description,
        featured_case_study: featuredCaseStudy,
      } = feature;
      const caseStudy = featuredCaseStudy.data;

      return (
        <li className={styles.item} key={feature.featured_case_study.id}>
          <div className={styles.details}>
            {title && RichText.render(title, LinkResolver)}
            {description && RichText.render(description, LinkResolver)}
          </div>

          <Link
            href="/portfolio/[caseStudySlug]"
            as={`/portfolio/${featuredCaseStudy.uid}`}
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
