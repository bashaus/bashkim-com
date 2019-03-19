import React from 'react';

import SlicePropType from './prop-type';
import styles from './styles.scss';

export default function GridEmbedSliceType(props) {
  const { slice } = props;

  return (
    <div className={styles.GridEmbedSliceType}>
      { slice.items.map((item, i) => {
        const {
          GridEmbedSliceType_Embed: embed,
        } = item;

        return (
          <div
            key={i}
            className={styles.item}
            dangerouslySetInnerHTML={{ __html: embed.html }}
          />
        );
      })}
    </div>
  );
}

GridEmbedSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
