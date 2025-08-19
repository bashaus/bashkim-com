import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { CaptionedVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Card from "@mui/material/Card";
import { MediaProvider } from "media-chrome/react/media-store";

import CaptionedPartial from "../../partials/CaptionedPartial";
import VideoPlayer from "../../video/VideoPlayer";

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
    <MediaProvider>
      <CaptionedPartial
        figure={
          <Card variant="outlined">
            <VideoPlayer url={video.embed_url} />
          </Card>
        }
      >
        <RichTextFormatter field={caption} />
      </CaptionedPartial>
    </MediaProvider>
  );
}
