import React from 'react';

import SlicePropType from './type';
import styles from './styles.module.scss';

interface GridEmbedSliceTypeProps {
  slice: SlicePropType;
}

const GridEmbedSliceType = ({
  slice,
}: GridEmbedSliceTypeProps): JSX.Element => (
  <div className={styles.GridEmbedSliceType}>
    {slice.items.map((item, i) => {
      const { GridEmbedSliceType_Embed: embed } = item;

      return (
        <div className={styles.item} key={i}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: embed.html }} />
        </div>
      );
    })}
  </div>
);

export default GridEmbedSliceType;
