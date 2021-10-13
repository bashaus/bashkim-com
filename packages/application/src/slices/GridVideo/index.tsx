import { PrismicRichText, GridVideoSliceType } from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";

import styles from "./styles.module.scss";

export type GridVideoSliceProps = {
  slice: GridVideoSliceType;
};

export const GridVideoSlice = ({ slice }: GridVideoSliceProps): JSX.Element => (
  <ol className={styles.GridVideoSlice} data-column-count={slice.fields.length}>
    {slice.fields.map((field, i) => {
      const {
        grid_video_slice_type_description: description,
        grid_video_slice_type_poster: poster,
        grid_video_slice_type_video: video,
      } = field;

      return (
        <li key={i}>
          <a href={video.embed_url}>
            <DeferredAsset
              width={poster.dimensions.width}
              height={poster.dimensions.height}
            >
              <img
                src={poster.url}
                alt={video.title}
                width={poster.dimensions.width}
                height={poster.dimensions.height}
              />
            </DeferredAsset>
            <div className={styles.Description}>
              <PrismicRichText render={description} />
            </div>
          </a>
        </li>
      );
    })}
  </ol>
);

export default GridVideoSlice;
