import Stack from "@mui/material/Stack";

import VideoPlayButton from "../VideoPlayButton";
import VideoSeekBar from "../VideoSeekBar";
import VideoTimeDisplay from "../VideoTimeDisplay";
import VideoViewport from "../VideoViewport";

export type VideoPlayerProps = Readonly<{
  /**
   * The URL of the video to be played
   */
  url: string;
}>;

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <>
      <VideoViewport url={url} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        padding={0.5}
      >
        <VideoPlayButton />
        <VideoSeekBar />
        <VideoTimeDisplay />
      </Stack>
    </>
  );
}
