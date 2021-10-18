import dynamic from "next/dynamic";
import {
  CaptionedImageSlice,
  CaptionedScreenshotsSlice,
  CaptionedVideoSlice,
  CarouselImagesSlice,
  CarouselPhonesSlice,
  FullTextSlice,
  GridEmbedSlice,
  GridVideoSlice,
  NewspaperSlice,
  SubtitleSlice,
} from "@bashkim-com/design-system";
import type { PrismicSliceType } from "@bashkim-com/prismic";

const SliceTypeComponentMap = {
  CaptionedImageSliceType: CaptionedImageSlice,
  CaptionedMagazineSliceType: dynamic(
    () => import("%slices/CaptionedMagazine")
  ),
  CaptionedScreenshotsSliceType: CaptionedScreenshotsSlice,
  CaptionedVideoSliceType: CaptionedVideoSlice,
  CarouselImagesSliceType: CarouselImagesSlice,
  CarouselPhonesSliceType: CarouselPhonesSlice,
  FullTextSliceType: FullTextSlice,
  GridEmbedSliceType: GridEmbedSlice,
  GridVideoSliceType: GridVideoSlice,
  NewspaperSliceType: NewspaperSlice,
  SubtitleSliceType: SubtitleSlice,
};

export type SliceProps = {
  slice: PrismicSliceType;
};

export const Slice = (props: SliceProps): JSX.Element => {
  const { slice } = props;
  const SliceTypeComponent = SliceTypeComponentMap[slice.type];
  return <SliceTypeComponent {...props} />;
};
