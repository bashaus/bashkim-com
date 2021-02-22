import CaptionedImageSliceType from "@bashkim-com/prismic/slice-types/CaptionedImage/schema.json";
import CaptionedMagazineSliceType from "@bashkim-com/prismic/slice-types/CaptionedMagazine/schema.json";
import CaptionedScreenshotsSliceType from "@bashkim-com/prismic/slice-types/CaptionedScreenshots/schema.json";
import CaptionedVideoSliceType from "@bashkim-com/prismic/slice-types/CaptionedVideo/schema.json";
import CarouselImagesSliceType from "@bashkim-com/prismic/slice-types/CarouselImages/schema.json";
import CarouselPhonesSliceType from "@bashkim-com/prismic/slice-types/CarouselPhones/schema.json";
import FullTextSliceType from "@bashkim-com/prismic/slice-types/FullText/schema.json";
import NewspaperSliceType from "@bashkim-com/prismic/slice-types/Newspaper/schema.json";
import SubtitleSliceType from "@bashkim-com/prismic/slice-types/Subtitle/schema.json";
import GridEmbedSliceType from "@bashkim-com/prismic/slice-types/GridEmbed/schema.json";
import GridVideoSliceType from "@bashkim-com/prismic/slice-types/GridVideo/schema.json";

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
