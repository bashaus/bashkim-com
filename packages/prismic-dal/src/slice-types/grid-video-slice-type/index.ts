import { graphql } from "../../gql";

export const GridVideoSliceType = graphql(`
  fragment GridVideoSliceType on Case_studyBodyGridvideoslicetype {
    type
    fields {
      ...GridVideoSliceTypeField
    }
  }
`);

export const GridVideoSliceTypeField = graphql(`
  fragment GridVideoSliceTypeField on Case_studyBodyGridvideoslicetypeFields {
    grid_video_slice_type_poster
    grid_video_slice_type_description
    grid_video_slice_type_video
  }
`);
