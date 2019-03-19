import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import React from 'react';

import Tile from '%components/Tile';
import LinkResolver from '%prismic/helpers/LinkResolver';

import styles from './styles.scss';

export default function PortfolioFeaturedCaseStudies(props) {
  const { featured } = props;

  return (
    <ul className={styles.PortfolioFeaturedCaseStudies}>
      { featured.map((feature) => {
        const {
          featured_title: title,
          featured_description: description,
          featured_case_study: featuredCaseStudy,
        } = feature;
        const caseStudy = featuredCaseStudy.data;

        return (
          <li className={styles.item} key={title}>
            <div className={styles.details}>
              { title && RichText.render(title, LinkResolver) }
              { description && RichText.render(description, LinkResolver) }
            </div>

            <div className={styles.tile}>
              <Link href={`/portfolio/${featuredCaseStudy.uid}`}>
                <a>
                  <Tile
                    title={caseStudy.meta_title}
                    description={caseStudy.meta_description}
                    href={caseStudy.href}
                    icon={caseStudy.image_icon.url}
                    poster={caseStudy.image_poster.url}
                  />
                </a>
              </Link>
            </div>
          </li>
        );
      }) }
    </ul>
  );
}

PortfolioFeaturedCaseStudies.propTypes = {
  featured: PropTypes.arrayOf(PropTypes.object).isRequired,
};
