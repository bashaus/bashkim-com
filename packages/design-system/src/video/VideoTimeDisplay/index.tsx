import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { timeUtils, useMediaSelector } from "media-chrome/react/media-store";

const { formatTime } = timeUtils;

export default function VideoTimeDisplay() {
  const mediaCurrentTime = useMediaSelector((state) => state.mediaCurrentTime);
  const [, seekableEnd] =
    useMediaSelector((state) => state.mediaSeekable) ?? [];

  if (mediaCurrentTime === 0) {
    return null;
  }

  return (
    <Box p={1}>
      <Typography color="primary" fontSize="small" noWrap>
        {mediaCurrentTime && formatTime(mediaCurrentTime ?? 0, seekableEnd)}
      </Typography>
    </Box>
  );
}
