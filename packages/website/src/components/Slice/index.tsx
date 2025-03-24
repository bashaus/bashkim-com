import { Case_StudyBody } from "@bashkim-com/prismic-dal";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const SliceTypeComponentMap: Record<
  NonNullable<Case_StudyBody["type"]>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ComponentType<any>
> = {
  CaptionedImageSliceType: dynamic(
    () => import("@bashkim-com/design-system/CaptionedImageSlice"),
  ),

  CaptionedMagazineSliceType: dynamic(
    () => import("@bashkim-com/design-system/CaptionedMagazineSlice"),
  ),

  CaptionedScreenshotsSliceType: dynamic(
    () => import("@bashkim-com/design-system/CaptionedScreenshotsSlice"),
  ),

  CaptionedVideoSliceType: dynamic(
    () => import("@bashkim-com/design-system/CaptionedVideoSlice"),
  ),

  CarouselImagesSliceType: dynamic(
    () => import("@bashkim-com/design-system/CarouselImagesSlice"),
  ),

  CarouselPhonesSliceType: dynamic(
    () => import("@bashkim-com/design-system/CarouselPhonesSlice"),
  ),

  FullTextSliceType: dynamic(
    () => import("@bashkim-com/design-system/FullTextSlice"),
  ),

  GridEmbedSliceType: dynamic(
    () => import("@bashkim-com/design-system/GridEmbedSlice"),
  ),

  GridVideoSliceType: dynamic(
    () => import("@bashkim-com/design-system/GridVideoSlice"),
  ),

  NewspaperSliceType: dynamic(
    () => import("@bashkim-com/design-system/NewspaperSlice"),
  ),

  SubtitleSliceType: dynamic(
    () => import("@bashkim-com/design-system/SubtitleSlice"),
  ),
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
