import type { CaptionedVideoSliceType } from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";
import { VideoPlayerYouTube } from "%components/VideoPlayerYouTube";

import { PartialCaptioned } from "%partials/Captioned";

import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

export type CaptionedVideoSliceProps = {
  slice: CaptionedVideoSliceType;
};

export const CaptionedVideoSlice = ({
  slice,
}: CaptionedVideoSliceProps): JSX.Element | null => {
  const {
    captioned_video_slice_type_caption: caption,
    captioned_video_slice_type_video: video,
  } = slice.primary;

  if (!video.embed_url) {
    return null;
  }

  const url = new URL(video.embed_url);
  const v = url.searchParams.get("v");

  if (!v) {
    return null;
  }

  return (
    <PartialCaptioned
      figure={
        <DeferredAsset ratio={9 / 16}>
          <VideoPlayerYouTube v={v} title={video.title} />
        </DeferredAsset>
      }
    >
      <PrismicRichText render={caption} />
    </PartialCaptioned>
  );
};

export default CaptionedVideoSlice;
