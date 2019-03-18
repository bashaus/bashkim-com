import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles.scss';

export default function Tile(props) {
  const {
    description, href, title, icon, poster,
  } = props;

  return (
    <article
      className={styles.Tile}
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <Link href={href}>
        <a itemProp="url">
          <h3 itemProp="headline">
            { title }
          </h3>

          <div
            className={styles.poster}
            style={{
              backgroundImage: `url(${poster})`,
            }}
          />

          <div className={styles.icon}>
            <img alt="" itemProp="image" src={icon} />
          </div>

          <p itemProp="description">
            { description }
          </p>
        </a>
      </Link>
    </article>
  );
}

Tile.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
