import type { Case_StudyBodyGridembedslicetype } from "@bashkim-com/prismic-types";

import * as S from "./styles";

export type GridEmbedSliceProps = {
  slice: Case_StudyBodyGridembedslicetype;
};

export const GridEmbedSlice = ({ slice }: GridEmbedSliceProps) => (
  <S.Embeds>
    {slice.fields?.map((field, i) => {
      const { grid_embed_slice_type_embed: embed } = field;

      return (
        <S.Embed key={i}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: embed?.html ?? "" }} />
        </S.Embed>
      );
    })}
  </S.Embeds>
);

export default GridEmbedSlice;
