import {
  CaptionedImageSlice,
  CaptionedMagazineSlice,
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
import { Case_StudyBody } from "@bashkim-com/prismic-dal";

const SliceTypeComponentMap = {
  CaptionedImageSliceType: CaptionedImageSlice,
  CaptionedMagazineSliceType: CaptionedMagazineSlice,
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

export type SliceProps = Readonly<{
  slice: Case_StudyBody;
}>;

export default function Slice(props: SliceProps) {
  const { slice } = props;

  if (!slice.type) {
    return null;
  }

  const SliceTypeComponent = SliceTypeComponentMap[slice.type];
  return <SliceTypeComponent {...props} />;
}
