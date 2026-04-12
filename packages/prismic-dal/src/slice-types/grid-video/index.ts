import { graphql } from "../../gql";

export const GridVideoSliceTypeField = graphql(`
  fragment GridVideoSliceTypeField on Case_studyBodyGridvideoslicetypeFields {
    __typename
    grid_video_slice_type_poster
    grid_video_slice_type_description
    grid_video_slice_type_video
  }
`);

export const GridVideoSliceType = graphql(`
  fragment GridVideoSliceType on Case_studyBodyGridvideoslicetype {
    __typename
    type
    fields {
      ...GridVideoSliceTypeField
    }
  }
`);
