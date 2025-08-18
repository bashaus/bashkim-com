import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  MediaActionTypes,
  useMediaDispatch,
  useMediaSelector,
} from "media-chrome/react/media-store";
import { useCallback } from "react";

export default function VideoPlayButton() {
  const dispatch = useMediaDispatch();
  const mediaPaused = useMediaSelector(
    (state) => typeof state.mediaPaused !== "boolean" || state.mediaPaused,
  );

  const IconComponent = mediaPaused ? PlayArrowIcon : PauseIcon;
  const label = mediaPaused ? "Play" : "Pause";

  const handleClick = useCallback(() => {
    dispatch({
      type: mediaPaused
        ? MediaActionTypes.MEDIA_PLAY_REQUEST
        : MediaActionTypes.MEDIA_PAUSE_REQUEST,
    });
  }, [dispatch, mediaPaused]);

  return (
    <Tooltip title={label} placement="top">
      <IconButton aria-label={label} color="primary" onClick={handleClick}>
        <IconComponent />
      </IconButton>
    </Tooltip>
  );
}
