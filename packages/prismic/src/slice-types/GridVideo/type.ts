import type { PrismicEmbedType } from "@bashkim-com/prismic/types/Embed";
import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type GridVideoSliceType = PrismicSliceType & {
  fields: Array<{
    grid_video_slice_type_video: PrismicEmbedType | null;
    grid_video_slice_type_poster: PrismicImageType | null;
    grid_video_slice_type_description: PrismicRichTextType<
      PrismicRichTextElement.PARAGRAPH
    > | null;
  }> | null;
};
