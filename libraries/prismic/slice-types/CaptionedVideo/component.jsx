import { RichText } from 'prismic-reactjs';
import React from 'react';
import { parse as parseUrl } from 'url';

import DeferredAsset from '%components/DeferredAsset';
import PartialCaptioned from '%components/PartialCaptioned';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

const CaptionedVideoSliceType = ({ slice }) => {
  const {
    CaptionedVideoSliceType_Caption: caption,
    CaptionedVideoSliceType_Video: video,
  } = slice.primary;

  let v = null;

  if (video.embed_url) {
    const url = parseUrl(video.embed_url, true);
    ({ v } = url.query);
  }

  return (
    <PartialCaptioned
      figure={(
        <DeferredAsset ratio={9 / 16}>
          <VideoPlayerYouTube v={v} title={video.title} />
        </DeferredAsset>
      )}
    >
      { caption && RichText.render(caption, LinkResolver) }
    </PartialCaptioned>
  );
};

CaptionedVideoSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default CaptionedVideoSliceType;
