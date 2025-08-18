import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { useMediaSelector } from "media-chrome/react/media-store";

import VideoCloseButton from "../VideoCloseButton";
import VideoPlayButton from "../VideoPlayButton";
import VideoSeekBar from "../VideoSeekBar";
import VideoTimeDisplay from "../VideoTimeDisplay";
import VideoViewport from "../VideoViewport";

export type VideoDialogProps = Readonly<{
  open: boolean;
  onClose: () => void;
  url: string;
}>;

export default function VideoDialog({ open, onClose, url }: VideoDialogProps) {
  const mediaPaused = useMediaSelector(
    (state) => typeof state.mediaPaused !== "boolean" || state.mediaPaused,
  );

  const backgroundColor = mediaPaused
    ? "rgba(0, 0, 0, .5)"
    : "rgba(0, 0, 0, .8)";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      slotProps={{
        backdrop: {
          style: { backgroundColor },
        },
      }}
    >
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
        <VideoCloseButton onClick={onClose} />
      </Stack>
    </Dialog>
  );
}
