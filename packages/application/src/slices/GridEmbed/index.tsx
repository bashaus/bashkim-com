import type { GridEmbedSliceType } from "@bashkim-com/prismic";

import styles from "./styles.module.scss";

export type GridEmbedSliceProps = {
  slice: GridEmbedSliceType;
};

export const GridEmbedSlice = ({ slice }: GridEmbedSliceProps): JSX.Element => (
  <div className={styles.GridEmbedSlice}>
    {slice.fields.map((field, i) => {
      const { grid_embed_slice_type_embed: embed } = field;

      return (
        <div className={styles.item} key={i}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: embed.html }} />
        </div>
      );
    })}
  </div>
);

export default GridEmbedSlice;
