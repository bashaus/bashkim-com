import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type { Case_StudyBodyGridvideoslicetype } from "@bashkim-com/prismic-dal";

import { VideoPoster } from "../../components/VideoPoster/VideoPoster";
import * as S from "./GridVideoSlice.styles";

export type GridVideoSliceProps = {
  slice: Case_StudyBodyGridvideoslicetype;
};

export const GridVideoSlice = ({ slice }: GridVideoSliceProps) => (
  <S.Videos data-column-count={slice.fields?.length}>
    {slice.fields?.map((field, i) => {
      const {
        grid_video_slice_type_description: description,
        grid_video_slice_type_poster: poster,
        grid_video_slice_type_video: video,
      } = field;

      if (!video?.embed_url || !poster?.url) {
        return null;
      }

      return (
        <S.Video key={i}>
          <VideoPoster
            title={video.title}
            imageUrl={poster.url}
            videoUrl={video.embed_url}
          />

          <S.Description>
            <PrismicRichText render={description} />
          </S.Description>
        </S.Video>
      );
    })}
  </S.Videos>
);

export default GridVideoSlice;
