import CaptionedImageSliceType from "../../../../slice-types/CaptionedImage/schema.json";
import CaptionedMagazineSliceType from "../../../../slice-types/CaptionedMagazine/schema.json";
import CaptionedScreenshotsSliceType from "../../../../slice-types/CaptionedScreenshots/schema.json";
import CaptionedVideoSliceType from "../../../../slice-types/CaptionedVideo/schema.json";
import CarouselImagesSliceType from "../../../../slice-types/CarouselImages/schema.json";
import CarouselPhonesSliceType from "../../../../slice-types/CarouselPhones/schema.json";
import FullTextSliceType from "../../../../slice-types/FullText/schema.json";
import GridEmbedSliceType from "../../../../slice-types/GridEmbed/schema.json";
import GridVideoSliceType from "../../../../slice-types/GridVideo/schema.json";
import NewspaperSliceType from "../../../../slice-types/Newspaper/schema.json";
import SubtitleSliceType from "../../../../slice-types/Subtitle/schema.json";

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
