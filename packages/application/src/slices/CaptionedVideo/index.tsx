import {
  PartialCaptioned,
  VideoPlayerYouTube,
} from "@bashkim-com/design-system";

import { PrismicRichText, CaptionedVideoSliceType } from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";

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
