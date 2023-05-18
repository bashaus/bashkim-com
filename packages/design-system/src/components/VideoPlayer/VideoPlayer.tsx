import { useCallback, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

import styles from "./VideoPlayer.module.scss";

export type VideoPlayerProps = {
  /**
   * An accessible title of the video
   */
  title?: string;

  /**
   * The URL of the video to be played
   */
  url: string;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
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

  return (
    <div className={styles["VideoPlayer"]}>
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
        light={false}
        onReady={handlePlayerReady}
        onPlay={handlePlayerPlay}
        onPause={handlePlayerPause}
        onDuration={handlePlayerDuration}
      />
    </div>
  );
};
