import classNames from "classnames";
import { RichText } from "prismic-reactjs";
import React from "react";
import { GridVideoSliceType } from "@bashkim-com/prismic";

import DeferredAsset from "%components/DeferredAsset";
import LinkResolver from "%prismic/LinkResolver";

import styles from "./styles.module.scss";

interface GridVideoSliceProps {
  slice: GridVideoSliceType;
}

const GridVideoSlice = ({ slice }: GridVideoSliceProps): JSX.Element => (
  <ol
    className={classNames(
      styles.GridVideoSlice,
      styles[`columns-${slice.items.length}`]
    )}
  >
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

export default GridVideoSlice;
