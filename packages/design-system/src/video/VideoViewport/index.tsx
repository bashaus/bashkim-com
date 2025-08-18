import Box from "@mui/material/Box";
import { useMediaRef } from "media-chrome/react/media-store";
import ReactPlayer from "react-player";

export type VideoViewportProps = Readonly<{
  url: string;
}>;

export default function VideoViewport({ url }: VideoViewportProps) {
  const mediaRefCallback = useMediaRef();

  return (
    <Box style={{ width: "100%", aspectRatio: "16 / 9" }}>
      <ReactPlayer
        ref={mediaRefCallback}
        slot="media"
        src={url}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
