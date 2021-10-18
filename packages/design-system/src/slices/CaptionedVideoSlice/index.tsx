import { PrismicRichText, CaptionedVideoSliceType } from "@bashkim-com/prismic";

import { CaptionedPartial } from "../../partials/CaptionedPartial";
import { VideoPlayerYouTube } from "../../components/VideoPlayerYouTube";

export type CaptionedVideoSliceProps = {
  slice: CaptionedVideoSliceType;
};

export const CaptionedVideoSlice = ({
  slice,
}: CaptionedVideoSliceProps): JSX.Element | null => {
  if (!slice.primary) {
    return null;
  }

  const {
    captioned_video_slice_type_caption: caption,
    captioned_video_slice_type_video: video,
  } = slice.primary;

  if (!video || !video.embed_url) {
    return null;
  }

  const url = new URL(video.embed_url);
  const v = url.searchParams.get("v");

  if (!v) {
    return null;
  }

  return (
    <CaptionedPartial figure={<VideoPlayerYouTube v={v} title={video.title} />}>
      <PrismicRichText render={caption} />
    </CaptionedPartial>
  );
};

export default CaptionedVideoSlice;
