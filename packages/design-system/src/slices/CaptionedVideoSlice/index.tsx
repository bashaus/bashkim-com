import { CaptionedVideoSliceType, PrismicRichText } from "@bashkim-com/prismic";

import { VideoPlayerYouTube } from "../../components/VideoPlayerYouTube";
import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial";

export type CaptionedVideoSliceProps = {
  slice: CaptionedVideoSliceType;
};

export const CaptionedVideoSlice = ({ slice }: CaptionedVideoSliceProps) => {
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
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>
    </CaptionedPartial>
  );
};

export default CaptionedVideoSlice;
