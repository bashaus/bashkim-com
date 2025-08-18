import dynamic from "next/dynamic";

import * as S from "./styles";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export type VideoBackgroundProps = Readonly<{
  /**
   * The URL of the video to be played
   */
  url: string;
}>;

export default function VideoBackground({ url }: VideoBackgroundProps) {
  return (
    <S.Container>
      <ReactPlayer
        config={{
          vimeo: {
            background: true,
          },
        }}
        src={url}
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
    </S.Container>
  );
}
