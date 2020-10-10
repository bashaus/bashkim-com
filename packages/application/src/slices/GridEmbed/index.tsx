import React from "react";
import { GridEmbedSliceType } from "@bashkim-com/prismic";

import styles from "./styles.module.scss";

type GridEmbedSliceProps = {
  slice: GridEmbedSliceType;
};

const GridEmbedSlice = ({ slice }: GridEmbedSliceProps): JSX.Element => (
  <div className={styles.GridEmbedSlice}>
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

export default GridEmbedSlice;
