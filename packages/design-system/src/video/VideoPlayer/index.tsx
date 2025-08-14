import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import type { ReactPlayerProps } from "react-player";

import VideoLoading from "../VideoLoading";
import * as S from "./styles";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: VideoLoading,
});

export type VideoPlayerProps = Readonly<{
  /**
   * The URL of the video to be played
   */
  url: string;
}>;

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState<ReactPlayerProps["playing"]>(false);

  const handlePlayerPlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handlePlayerPause = useCallback(() => {
    setPlaying(false);
  }, []);

  return (
    <S.VideoPlayer>
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
        onPlay={handlePlayerPlay}
        onPause={handlePlayerPause}
      />
    </S.VideoPlayer>
  );
}
