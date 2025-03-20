import ReactPlayer from "react-player/lazy";

import * as S from "./styles";

export type VideoBackgroundProps = Readonly<{
  /**
   * The URL of the video to be played
   */
  url: string;
}>;

export default function VideoBackground({ url }: VideoBackgroundProps) {
  return (
    <S.Wrapper>
      <ReactPlayer
        url={url}
        controls={false}
        light={false}
        loop
        muted
        playing
        style={{
          width: "auto",
          aspectRatio: "16 / 9",
          minWidth: "100vmax",
          minHeight: "100vmax",
        }}
        width="auto"
        height="100%"
      />
    </S.Wrapper>
  );
}
