import type { GridVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import VideoPlayerLink from "../../components/VideoPlayerLink";

export type GridVideoSliceProps = Readonly<{
  slice: GridVideoSliceTypeFragment;
}>;

export default function GridVideoSlice({ slice }: GridVideoSliceProps) {
  return (
    <Container>
      <Grid container spacing={2}>
        {slice.fields?.map((field) => {
          const {
            grid_video_slice_type_description: description,
            grid_video_slice_type_poster: poster,
            grid_video_slice_type_video: video,
          } = field;

          if (!video?.embed_url || !poster?.url) {
            return null;
          }

          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              key={poster.url}
            >
              <Card variant="outlined">
                <VideoPlayerLink videoUrl={video.embed_url}>
                  <CardActionArea>
                    <CardMedia component="img" image={poster.url} />
                    <CardHeader
                      avatar={<PlayCircleIcon />}
                      title={<PrismicRichText render={description} />}
                    />
                  </CardActionArea>
                </VideoPlayerLink>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
