import CaptionedImageSliceType from "@bashkim-com/prismic/slice-types/CaptionedImage/type";
import CaptionedMagazineSliceType from "@bashkim-com/prismic/slice-types/CaptionedMagazine/type";
import CaptionedScreenshotsSliceType from "@bashkim-com/prismic/slice-types/CaptionedScreenshots/type";
import CaptionedVideoSliceType from "@bashkim-com/prismic/slice-types/CaptionedVideo/type";
import CarouselImagesSliceType from "@bashkim-com/prismic/slice-types/CarouselImages/type";
import CarouselPhonesSliceType from "@bashkim-com/prismic/slice-types/CarouselPhones/type";
import FullTextSliceType from "@bashkim-com/prismic/slice-types/FullText/type";
import NewspaperSliceType from "@bashkim-com/prismic/slice-types/Newspaper/type";
import SubtitleSliceType from "@bashkim-com/prismic/slice-types/Subtitle/type";
import GridEmbedSliceType from "@bashkim-com/prismic/slice-types/GridEmbed/type";
import GridVideoSliceType from "@bashkim-com/prismic/slice-types/GridVideo/type";

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
