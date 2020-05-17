import CaptionedImageSliceType from "%slice-types/CaptionedImage/type";
import CaptionedMagazineSliceType from "%slice-types/CaptionedMagazine/type";
import CaptionedScreenshotsSliceType from "%slice-types/CaptionedScreenshots/type";
import CaptionedVideoSliceType from "%slice-types/CaptionedVideo/type";
import CarouselImagesSliceType from "%slice-types/CarouselImages/type";
import CarouselPhonesSliceType from "%slice-types/CarouselPhones/type";
import FullTextSliceType from "%slice-types/FullText/type";
import NewspaperSliceType from "%slice-types/Newspaper/type";
import SubtitleSliceType from "%slice-types/Subtitle/type";
import GridEmbedSliceType from "%slice-types/GridEmbed/type";
import GridVideoSliceType from "%slice-types/GridVideo/type";

interface CaseStudyContentTypePageTab {
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
}

export default CaseStudyContentTypePageTab;
