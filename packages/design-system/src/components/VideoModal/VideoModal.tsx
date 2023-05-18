import { SquareIcon, TriangleRightIcon, XIcon } from "@primer/octicons-react";
import { useCallback, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

import { Modal, ModalProps } from "../Modal/Modal";
import styles from "./VideoModal.module.scss";

export type VideoModalProps = {
  /**
   * Whether or not to display the video modal
   */
  isOpen: boolean;

  /**
   * Called when the modal is requested to be closed
   */
  onRequestClose: ModalProps["onRequestClose"];

  /**
   * The URL of the video to be embedded
   */
  url: string;
};

export const VideoModal = ({
  isOpen,
  onRequestClose,
  url,
}: VideoModalProps) => {
  const playerRef = useRef(null);

  const [, setReady] = useState<boolean>(false);
  const [, setDuration] = useState<ReactPlayerProps["duration"]>(0);
  const [playing, setPlaying] = useState<ReactPlayerProps["playing"]>(false);

  const handlePlayerReady = useCallback(() => {
    setReady(true);
  }, []);

  const handlePlayerPlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handlePlayerPause = useCallback(() => {
    setPlaying(false);
  }, []);

  const handlePlayerDuration = useCallback(
    (durationValue: ReactPlayerProps["duration"]) => {
      setDuration(durationValue);
    },
    []
  );

  /* */
  const handlePlayPauseClick = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles["VideoFrame"]}>
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
          onReady={handlePlayerReady}
          onPlay={handlePlayerPlay}
          onPause={handlePlayerPause}
          onDuration={handlePlayerDuration}
        />
      </div>

      <div className={styles["VideoControls"]}>
        <button
          className={styles["ControlButton"]}
          onClick={handlePlayPauseClick}
        >
          {playing ? (
            <SquareIcon
              className={styles["StopIcon"]}
              aria-label="Stop video"
            />
          ) : (
            <TriangleRightIcon
              className={styles["PlayIcon"]}
              aria-label="Play video"
            />
          )}
        </button>

        <button className={styles["ControlButton"]} onClick={onRequestClose}>
          <XIcon
            className={styles["CloseIcon"]}
            aria-label="Stop and close video"
          />
        </button>
      </div>

      {/* onBuffer?: () => void */}
      {/* onBufferEnd?: () => void */}
      {/* onClickPreview?: (event: any) => void */}
      {/* onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void */}
      {/* onSeek?: (seconds: number) => void */}
    </Modal>
  );
};
