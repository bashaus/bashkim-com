import { Factory } from "fishery";

import {
  GridVideoSliceTypeFieldFragment,
  GridVideoSliceTypeFragment,
} from "../../gql/graphql";
import { prismicEmbedYouTubeFactory } from "../../prismic/embed-video/factory";
import { prismicImageFactory } from "../../prismic/image/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const gridVideoSliceFieldFactory =
  Factory.define<GridVideoSliceTypeFieldFragment>(({ params, sequence }) => {
    const { width: posterWidth = 400, height: posterHeight = 300 } =
      params.grid_video_slice_type_poster?.dimensions ?? {};

    const {
      thumbnail_height: thumbnailWidth = 480,
      thumbnail_width: thumbnailHeight = 360,
    } = params.grid_video_slice_type_video?.dimensions ?? {};

    return {
      __typename: "Case_studyBodyGridvideoslicetypeFields",
      grid_video_slice_type_description: prismicParagraphFactory.buildList(1),
      grid_video_slice_type_poster: prismicImageFactory.build({
        dimensions: { width: posterWidth, height: posterHeight },
        alt: `Video ${sequence}`,
      }),
      grid_video_slice_type_video: prismicEmbedYouTubeFactory.build({
        thumbnail_width: thumbnailWidth,
        thumbnail_height: thumbnailHeight,
      }),
    };
  });

export const gridVideoSliceFactory = Factory.define<GridVideoSliceTypeFragment>(
  () => {
    return {
      __typename: "Case_studyBodyGridvideoslicetype",
      type: "GridVideoSliceType",
      fields: gridVideoSliceFieldFactory.buildList(4),
    };
  },
);
