import { RichText } from 'prismic-reactjs';
import React from 'react';

import Link from 'next/link';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';
import styles from './styles.scss';

export default function GridVideoSliceType(props) {
  const { slice } = props;

  return (
    <ol
      className={`
        ${styles.GridVideoSliceType}
        ${styles[`columns-${slice.items.length}`]}
      `}
    >
      { slice.items.map((item, i) => {
        const {
          GridVideoSliceType_Video: video,
          GridVideoSliceType_Poster: poster,
          GridVideoSliceType_Description: description,
        } = item;

        return (
          <li key={i}>
            <Link href={video.embed_url}>
              <a>
                <img src={poster.url} alt={video.title} />
                <div className={styles.description}>
                  { description && RichText.render(description, LinkResolver) }
                </div>
              </a>
            </Link>
          </li>
        );
      }) }
    </ol>
  );
}

GridVideoSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
