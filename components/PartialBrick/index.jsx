import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function CaseStudyBrick(props) {
  const {
    title, href, icon, description,
  } = props;

  return (
    <article itemScope itemType="http://schema.org/CreativeWork" className={styles.CaseStudyBrick}>
      <Link href={href}>
        <a itemProp="url">
          <h3 itemProp="headline">{title}</h3>

          <div className={styles.image}>
            <img alt="" itemProp="image" src={icon} />
          </div>

          <p itemProp="description">
            {description}
          </p>
        </a>
      </Link>
    </article>
  );
}

CaseStudyBrick.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
