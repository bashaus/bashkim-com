import type { GridVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import VideoPoster from "../../components/VideoPoster";
import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type GridVideoSliceProps = Readonly<{
  slice: GridVideoSliceTypeFragment;
}>;

export default function GridVideoSlice({ slice }: GridVideoSliceProps) {
  return (
    <ol className={styles["Videos"]} data-column-count={slice.fields?.length}>
      {slice.fields?.map((field) => {
        const {
          grid_video_slice_type_description: description,
          grid_video_slice_type_poster: poster,
          grid_video_slice_type_video: video,
        } = field;

        if (!video?.embed_url || !poster?.url) {
          return null;
        }

        return (
          <li className={styles["Video"]} key={JSON.stringify(field)}>
            <VideoPoster
              title={video.title}
              imageUrl={poster.url}
              width={poster.dimensions.width}
              height={poster.dimensions.height}
              videoUrl={video.embed_url}
            />

            <RichTextFormatter className={styles["Description"]}>
              <PrismicRichText render={description} />
            </RichTextFormatter>
          </li>
        );
      })}
    </ol>
  );
}
