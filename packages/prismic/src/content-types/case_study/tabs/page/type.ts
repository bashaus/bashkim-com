import type { CaptionedImageSliceType } from "../../../../slice-types/CaptionedImage/type";
import type { CaptionedMagazineSliceType } from "../../../../slice-types/CaptionedMagazine/type";
import type { CaptionedScreenshotsSliceType } from "../../../../slice-types/CaptionedScreenshots/type";
import type { CaptionedVideoSliceType } from "../../../../slice-types/CaptionedVideo/type";
import type { CarouselImagesSliceType } from "../../../../slice-types/CarouselImages/type";
import type { CarouselPhonesSliceType } from "../../../../slice-types/CarouselPhones/type";
import type { FullTextSliceType } from "../../../../slice-types/FullText/type";
import type { GridEmbedSliceType } from "../../../../slice-types/GridEmbed/type";
import type { GridVideoSliceType } from "../../../../slice-types/GridVideo/type";
import type { NewspaperSliceType } from "../../../../slice-types/Newspaper/type";
import type { SubtitleSliceType } from "../../../../slice-types/Subtitle/type";

export type CaseStudyContentTypePageTab = {
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
