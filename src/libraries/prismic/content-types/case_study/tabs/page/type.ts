import CaptionedImageSliceType from '%prismic/slice-types/CaptionedImage/type';
import CaptionedMagazineSliceType from '%prismic/slice-types/CaptionedMagazine/type';
import CaptionedScreenshotsSliceType from '%prismic/slice-types/CaptionedScreenshots/type';
import CaptionedVideoSliceType from '%prismic/slice-types/CaptionedVideo/type';
import CarouselImagesSliceType from '%prismic/slice-types/CarouselImages/type';
import CarouselPhonesSliceType from '%prismic/slice-types/CarouselPhones/type';
import FullTextSliceType from '%prismic/slice-types/FullText/type';
import NewspaperSliceType from '%prismic/slice-types/Newspaper/type';
import SubtitleSliceType from '%prismic/slice-types/Subtitle/type';
import GridEmbedSliceType from '%prismic/slice-types/GridEmbed/type';
import GridVideoSliceType from '%prismic/slice-types/GridVideo/type';

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
