import {
  MediaActionTypes,
  useMediaDispatch,
  useMediaRef,
  useMediaSelector,
} from "media-chrome/react/media-store";
import { useCallback } from "react";
import ReactPlayer from "react-player";

import * as S from "./styles";

export type VideoViewportProps = Readonly<{
  url: string;
}>;

export default function VideoViewport({ url }: VideoViewportProps) {
  const mediaRefCallback = useMediaRef();
  const dispatch = useMediaDispatch();
  const mediaPaused = useMediaSelector(
    (state) => typeof state.mediaPaused !== "boolean" || state.mediaPaused,
  );

  const handleClick = useCallback(() => {
    dispatch({
      type: mediaPaused
        ? MediaActionTypes.MEDIA_PLAY_REQUEST
        : MediaActionTypes.MEDIA_PAUSE_REQUEST,
    });
  }, [dispatch, mediaPaused]);

  return (
    <S.Container onClick={handleClick}>
      <ReactPlayer
        ref={mediaRefCallback}
        slot="media"
        src={url}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <S.Icon opacity={mediaPaused ? 1 : 0} />
    </S.Container>
  );
}
