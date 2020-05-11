import CaptionedImageSliceType from "%prismic/slice-types/CaptionedImage/schema.json";
import CaptionedMagazineSliceType from "%prismic/slice-types/CaptionedMagazine/schema.json";
import CaptionedScreenshotsSliceType from "%prismic/slice-types/CaptionedScreenshots/schema.json";
import CaptionedVideoSliceType from "%prismic/slice-types/CaptionedVideo/schema.json";
import CarouselImagesSliceType from "%prismic/slice-types/CarouselImages/schema.json";
import CarouselPhonesSliceType from "%prismic/slice-types/CarouselPhones/schema.json";
import FullTextSliceType from "%prismic/slice-types/FullText/schema.json";
import NewspaperSliceType from "%prismic/slice-types/Newspaper/schema.json";
import SubtitleSliceType from "%prismic/slice-types/Subtitle/schema.json";
import GridEmbedSliceType from "%prismic/slice-types/GridEmbed/schema.json";
import GridVideoSliceType from "%prismic/slice-types/GridVideo/schema.json";

export default {
  body: {
    type: "Slices",
    fieldset: "Slice zone",
    config: {
      choices: {
        SubtitleSliceType,
        FullTextSliceType,
        CaptionedImageSliceType,
        CaptionedScreenshotsSliceType,
        CaptionedVideoSliceType,
        CaptionedMagazineSliceType,
        CarouselImagesSliceType,
        CarouselPhonesSliceType,
        NewspaperSliceType,
        GridEmbedSliceType,
        GridVideoSliceType,
      },
    },
  },
};
