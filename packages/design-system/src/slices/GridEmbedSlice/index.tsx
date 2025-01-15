import type { GridEmbedSliceTypeFragment } from "@bashkim-com/prismic-dal";

import styles from "./styles.module.scss";

export type GridEmbedSliceProps = Readonly<{
  slice: GridEmbedSliceTypeFragment;
}>;

export default function GridEmbedSlice({ slice }: GridEmbedSliceProps) {
  return (
    <div className={styles["Embeds"]}>
      {slice.fields?.map((field) => {
        const { grid_embed_slice_type_embed: embed } = field;

        return (
          <div className={styles["Embed"]} key={JSON.stringify(field)}>
            <span dangerouslySetInnerHTML={{ __html: embed?.html ?? "" }} />
          </div>
        );
      })}
    </div>
  );
}
