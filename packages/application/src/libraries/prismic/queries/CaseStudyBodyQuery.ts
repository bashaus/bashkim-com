import { gql } from "@apollo/client";

export const CaseStudyBodyQuery = gql`
  query CaseStudyBody($caseStudySlug: String) {
    caseStudyBody: allCase_studys(uid: $caseStudySlug) {
      edges {
        node {
          body {
            ... on Case_studyBodySubtitleslicetype {
              type
              primary {
                subtitle_slice_type_heading
                subtitle_slice_type_description
              }
            }
            ... on Case_studyBodyFulltextslicetype {
              type
              primary {
                full_text_slice_type_body
              }
            }
            ... on Case_studyBodyNewspaperslicetype {
              type
              fields {
                newspaper_slice_type_group
              }
            }
            ... on Case_studyBodyGridembedslicetype {
              type
              fields {
                grid_embed_slice_type_embed
              }
            }
            ... on Case_studyBodyGridvideoslicetype {
              type
              fields {
                grid_video_slice_type_poster
                grid_video_slice_type_description
                grid_video_slice_type_video
              }
            }
            ... on Case_studyBodyCaptionedimageslicetype {
              type
              primary {
                captioned_image_slice_type_caption
                captioned_image_slice_type_image
                captioned_image_slice_type_image_blurhash
              }
            }
            ... on Case_studyBodyCaptionedvideoslicetype {
              type
              primary {
                captioned_video_slice_type_caption
                captioned_video_slice_type_video
              }
            }
            ... on Case_studyBodyCarouselimagesslicetype {
              type
              fields {
                carousel_images_slice_type_image
                carousel_images_slice_type_caption
              }
            }
            ... on Case_studyBodyCarouselphonesslicetype {
              type
              fields {
                carousel_phones_slice_type_device_type
                carousel_phones_slice_type_image
                carousel_phones_slice_type_caption
              }
            }
            ... on Case_studyBodyCaptionedmagazineslicetype {
              type
              primary {
                captioned_magazine_slice_type_caption
              }
              fields {
                captioned_magazine_slice_type_images
              }
            }
            ... on Case_studyBodyCaptionedscreenshotsslicetype {
              type
              primary {
                captioned_screenshots_slice_type_caption
              }
              fields {
                captioned_screenshots_slice_type_images
              }
            }
          }
        }
      }
    }
  }
`;
