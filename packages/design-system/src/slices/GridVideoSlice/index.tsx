import { GridVideoSliceType, PrismicRichText } from "@bashkim-com/prismic";

import * as S from "./styles";

export type GridVideoSliceProps = {
  slice: GridVideoSliceType;
};

export const GridVideoSlice = ({
  slice,
}: GridVideoSliceProps): JSX.Element | null => (
  <S.Videos data-column-count={slice.fields?.length}>
    {slice.fields?.map((field, i) => {
      const {
        grid_video_slice_type_description: description,
        grid_video_slice_type_poster: poster,
        grid_video_slice_type_video: video,
      } = field;

      if (!video || !poster) {
        return null;
      }

      return (
        <S.Video key={i}>
          <a href={video.embed_url} target="_blank" rel="noopener noreferrer">
            <img
              src={poster.url}
              alt={video.title}
              width={poster.dimensions.width}
              height={poster.dimensions.height}
            />
            <S.Description>
              <PrismicRichText render={description} />
            </S.Description>
          </a>
        </S.Video>
      );
    })}
  </S.Videos>
);

export default GridVideoSlice;
