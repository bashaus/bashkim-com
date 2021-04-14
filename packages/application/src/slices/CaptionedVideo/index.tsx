import { RichText } from "prismic-reactjs";
import type { CaptionedVideoSliceType } from "@bashkim-com/prismic";

import DeferredAsset from "%components/DeferredAsset";
import PartialCaptioned from "%partials/Captioned";
import VideoPlayerYouTube from "%components/VideoPlayerYouTube";
import LinkResolver from "%prismic/LinkResolver";

type CaptionedVideoSliceProps = {
  slice: CaptionedVideoSliceType;
};

const CaptionedVideoSlice = ({
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
      {caption && RichText.render(caption, LinkResolver)}
    </PartialCaptioned>
  );
};

export default CaptionedVideoSlice;
