import { RichText } from "prismic-reactjs";
import React from "react";

import DeferredAsset from "%components/DeferredAsset";
import PartialCaptioned from "%components/PartialCaptioned";
import VideoPlayerYouTube from "%components/VideoPlayerYouTube";
import LinkResolver from "%prismic/helpers/LinkResolver";

import SlicePropType from "./type";

interface CaptionedVideoSliceTypeProps {
  slice: SlicePropType;
}

const CaptionedVideoSliceType = ({
  slice,
}: CaptionedVideoSliceTypeProps): JSX.Element | null => {
  const {
    CaptionedVideoSliceType_Caption: caption,
    CaptionedVideoSliceType_Video: video,
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

export default CaptionedVideoSliceType;
