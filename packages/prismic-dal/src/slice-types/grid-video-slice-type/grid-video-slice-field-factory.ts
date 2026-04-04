import { Factory } from "fishery";

import { GridVideoSliceTypeFieldFragment } from "../../gql/graphql";
import { prismicImageFactory } from "../../prismic/prismic-image-factory";
import { prismicParagraphFactory } from "../../prismic/prismic-paragraph-factory";
import { prismicVideoFactory } from "../../prismic/prismic-video-factory";

export const gridVideoSliceFieldFactory =
  Factory.define<GridVideoSliceTypeFieldFragment>((opts) => {
    const { width: posterWidth = 400, height: posterHeight = 300 } =
      opts.params.grid_video_slice_type_poster?.dimensions ?? {};

    const {
      thumbnail_height: thumbnailWidth = 480,
      thumbnail_width: thumbnailHeight = 360,
    } = opts.params.grid_video_slice_type_video?.dimensions ?? {};

    return {
      grid_video_slice_type_description: prismicParagraphFactory.buildList(1),
      grid_video_slice_type_poster: prismicImageFactory.build({
        dimensions: { width: posterWidth, height: posterHeight },
        alt: `Video ${opts.sequence}`,
      }),
      grid_video_slice_type_video: prismicVideoFactory.build({
        thumbnail_width: thumbnailWidth,
        thumbnail_height: thumbnailHeight,
      }),
    };
  });
