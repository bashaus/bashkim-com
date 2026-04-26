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
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0.5,
        }}
        spacing={2}
      >
        <VideoPlayButton />
        <VideoSeekBar />
        <VideoTimeDisplay />
      </Stack>
    </>
  );
}
