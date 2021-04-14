import type CaptionedImageSliceType from "@bashkim-com/prismic/slice-types/CaptionedImage/type";
import type CaptionedMagazineSliceType from "@bashkim-com/prismic/slice-types/CaptionedMagazine/type";
import type CaptionedScreenshotsSliceType from "@bashkim-com/prismic/slice-types/CaptionedScreenshots/type";
import type CaptionedVideoSliceType from "@bashkim-com/prismic/slice-types/CaptionedVideo/type";
import type CarouselImagesSliceType from "@bashkim-com/prismic/slice-types/CarouselImages/type";
import type CarouselPhonesSliceType from "@bashkim-com/prismic/slice-types/CarouselPhones/type";
import type FullTextSliceType from "@bashkim-com/prismic/slice-types/FullText/type";
import type NewspaperSliceType from "@bashkim-com/prismic/slice-types/Newspaper/type";
import type SubtitleSliceType from "@bashkim-com/prismic/slice-types/Subtitle/type";
import type GridEmbedSliceType from "@bashkim-com/prismic/slice-types/GridEmbed/type";
import type GridVideoSliceType from "@bashkim-com/prismic/slice-types/GridVideo/type";

type CaseStudyContentTypePageTab = {
  body: Array<
    | CaptionedImageSliceType
    | CaptionedMagazineSliceType
    | CaptionedScreenshotsSliceType
    | CaptionedVideoSliceType
    | CarouselImagesSliceType
    | CarouselPhonesSliceType
    | FullTextSliceType
    | NewspaperSliceType
    | SubtitleSliceType
    | GridEmbedSliceType
    | GridVideoSliceType
  >;
};

export default CaseStudyContentTypePageTab;
