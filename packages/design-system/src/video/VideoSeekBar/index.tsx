import Slider from "@mui/material/Slider";
import {
  MediaActionTypes,
  useMediaDispatch,
  useMediaSelector,
} from "media-chrome/react/media-store";

export default function VideoSeekBar() {
  const dispatch = useMediaDispatch();
  const mediaCurrentTime = useMediaSelector((state) => state.mediaCurrentTime);
  const duration = useMediaSelector((state) => state.mediaDuration);

  return (
    <Slider
      aria-label="Seek"
      value={mediaCurrentTime ?? 0}
      min={0}
      max={duration}
      step={0.01}
      onChange={(_event, value) => {
        dispatch({
          type: MediaActionTypes.MEDIA_SEEK_REQUEST,
          detail: value,
        });
      }}
      size="small"
    />
  );
}
