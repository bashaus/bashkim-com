import type { GridEmbedSliceTypeFragment } from "@bashkim-com/prismic-dal";

import styles from "./styles.module.scss";

export type GridEmbedSliceProps = {
  slice: GridEmbedSliceTypeFragment;
};

export const GridEmbedSlice = ({ slice }: GridEmbedSliceProps) => (
  <div className={styles["Embeds"]}>
    {slice.fields?.map((field) => {
      const { grid_embed_slice_type_embed: embed } = field;

      return (
        <div className={styles["Embed"]} key={JSON.stringify(field)}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: embed?.html ?? "" }} />
        </div>
      );
    })}
  </div>
);

export default GridEmbedSlice;
