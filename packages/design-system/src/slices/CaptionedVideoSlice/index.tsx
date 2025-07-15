import type { CaptionedVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import VideoPlayer from "../../components/VideoPlayer";
import CaptionedPartial from "../../partials/CaptionedPartial";

export type CaptionedVideoSliceProps = Readonly<{
  slice: CaptionedVideoSliceTypeFragment;
}>;

export default function CaptionedVideoSlice({
  slice,
}: CaptionedVideoSliceProps) {
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
    <CaptionedPartial figure={<VideoPlayer url={video.embed_url} />}>
      <PrismicRichText render={caption} />
    </CaptionedPartial>
  );
}
