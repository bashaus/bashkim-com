import { Factory } from "fishery";

import {
  GridVideoSliceTypeFieldFragment,
  GridVideoSliceTypeFragment,
} from "../../gql/graphql";
import { prismicEmbedYouTubeFactory } from "../../prismic/embed-video/factory";
import { prismicImageFactory } from "../../prismic/image/factory";
import { prismicParagraphFactory } from "../../prismic/paragraph/factory";

export const gridVideoSliceFieldFactory =
  Factory.define<GridVideoSliceTypeFieldFragment>(
    ({ associations, sequence }) => {
      return {
        __typename: "Case_studyBodyGridvideoslicetypeFields",

        grid_video_slice_type_description:
          associations.grid_video_slice_type_description ?? [
            prismicParagraphFactory.build(),
          ],

        grid_video_slice_type_poster:
          associations.grid_video_slice_type_poster ??
          prismicImageFactory.build({
            alt: `#${sequence}`,
            dimensions: { width: 400, height: 300 },
          }),

        grid_video_slice_type_video:
          associations.grid_video_slice_type_video ??
          prismicEmbedYouTubeFactory.build(),
      };
    },
  );

export const gridVideoSliceFactory = Factory.define<GridVideoSliceTypeFragment>(
  ({ associations }) => {
    return {
      __typename: "Case_studyBodyGridvideoslicetype",
      type: "GridVideoSliceType",
      fields: associations.fields ?? gridVideoSliceFieldFactory.buildList(4),
    };
  },
);
