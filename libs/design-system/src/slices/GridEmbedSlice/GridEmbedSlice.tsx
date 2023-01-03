import type { Case_StudyBodyGridembedslicetype } from "@bashkim-com/prismic-dal";

import styles from "./GridEmbedSlice.module.scss";

export type GridEmbedSliceProps = {
  slice: Case_StudyBodyGridembedslicetype;
};

export const GridEmbedSlice = ({ slice }: GridEmbedSliceProps) => (
  <div className={styles["Embeds"]}>
    {slice.fields?.map((field, i) => {
      const { grid_embed_slice_type_embed: embed } = field;

      return (
        <div className={styles["Embed"]} key={i}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: embed?.html ?? "" }} />
        </div>
      );
    })}
  </div>
);

export default GridEmbedSlice;
