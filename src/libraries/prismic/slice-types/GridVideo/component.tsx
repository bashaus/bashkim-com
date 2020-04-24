import classNames from 'classnames';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import DeferredAsset from '%components/DeferredAsset';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './type';
import styles from './styles.module.scss';

interface GridVideoSliceTypeProps {
  slice: SlicePropType;
}

const GridVideoSliceType = ({ slice }: GridVideoSliceTypeProps): JSX.Element => (
  <ol className={classNames(styles.GridVideoSliceType, styles[`columns-${slice.items.length}`])}>
    {slice.items.map((item, i) => {
      const {
        GridVideoSliceType_Video: video,
        GridVideoSliceType_Poster: poster,
        GridVideoSliceType_Description: description,
      } = item;

      return (
        <li key={i}>
          <a href={video.embed_url}>
            <DeferredAsset
              width={poster.dimensions.width}
              height={poster.dimensions.height}
            >
              <img src={poster.url} alt={video.title} />
            </DeferredAsset>
            <div className={styles.description}>
              {description && RichText.render(description, LinkResolver)}
            </div>
          </a>
        </li>
      );
    })}
  </ol>
);

export default GridVideoSliceType;
