import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import { MouseEventHandler, useCallback, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

export type VideoDialogProps = Readonly<{
  /**
   * Whether or not to display the video dialog
   */
  open: boolean;

  /**
   * Called when the dialog is requested to be closed
   */
  onClose: DialogProps["onClose"];

  /**
   * The URL of the video to be embedded
   */
  url: string;
}>;

export default function VideoDialog({ open, onClose, url }: VideoDialogProps) {
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState<ReactPlayerProps["playing"]>(false);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      onClose?.(event, "backdropClick");
    },
    [onClose],
  );

  const handlePlayerPlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handlePlayerPause = useCallback(() => {
    setPlaying(false);
  }, []);

  /* */
  const handlePlayPauseClick = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <Box sx={{ aspectRatio: "16 / 9" }}>
        <ReactPlayer
          config={{
            youtube: {
              playerVars: {
                rel: "0",
                iv_load_policy: "3",
                modestbranding: "1",
                enablejsapi: "1",
                playsinline: "0",
              },
            },
          }}
          ref={playerRef}
          url={url}
          playing={playing}
          controls={false}
          volume={0.8}
          muted={false}
          width="100%"
          height="100%"
          pip={false}
          light={false}
          onPlay={handlePlayerPlay}
          onPause={handlePlayerPause}
        />
      </Box>

      <DialogActions>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Button
            color="primary"
            onClick={handlePlayPauseClick}
            startIcon={
              playing ? (
                <StopIcon aria-label="Stop video" />
              ) : (
                <PlayArrowIcon aria-label="Play video" />
              )
            }
          >
            {playing ? "Pause" : "Play"}
          </Button>

          <Button
            onClick={handleClose}
            endIcon={<CloseIcon aria-label="Stop and close video" />}
          >
            Close
          </Button>
        </Stack>
      </DialogActions>

      {/* onBuffer?: () => void */}
      {/* onBufferEnd?: () => void */}
      {/* onClickPreview?: (event: any) => void */}
      {/* onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void */}
      {/* onSeek?: (seconds: number) => void */}
    </Dialog>
  );
}
