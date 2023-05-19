import type { CaptionedVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial/CaptionedPartial";

export type CaptionedVideoSliceProps = {
  slice: CaptionedVideoSliceTypeFragment;
};

export const CaptionedVideoSlice = ({ slice }: CaptionedVideoSliceProps) => {
  if (!slice.primary) {
    return null;
  }

  const {
    captioned_video_slice_type_caption: caption,
    captioned_video_slice_type_video: video,
  } = slice.primary;

  if (!video?.embed_url) {
    return null;
  }

  return (
    <CaptionedPartial
      figure={<VideoPlayer url={video.embed_url} title={video.title} />}
    >
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>
    </CaptionedPartial>
  );
};

export default CaptionedVideoSlice;
