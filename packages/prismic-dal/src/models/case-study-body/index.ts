import { graphql } from "../../gql";

export const CaseStudyBodyModel = graphql(`
  fragment CaseStudyBodyModel on Case_study {
    __typename
    body {
      ...CaptionedImageSliceType
      ...CaptionedMagazineSliceType
      ...CaptionedScreenshotsSliceType
      ...CaptionedVideoSliceType
      ...CarouselImagesSliceType
      ...CarouselPhonesSliceType
      ...FullTextSliceType
      ...GridEmbedSliceType
      ...GridVideoSliceType
      ...NewspaperSliceType
      ...SubtitleSliceType
    }
  }
`);
