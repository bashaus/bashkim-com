import dynamic from "next/dynamic";
import React from "react";

import { SlicePrismicType } from "@bashkim-com/prismic";

const SliceTypeComponentMap: Record<string, any> = {
  CaptionedImageSliceType: dynamic(() => import("%slices/CaptionedImage")),
  CaptionedMagazineSliceType: dynamic(() =>
    import("%slices/CaptionedMagazine")
  ),
  CaptionedScreenshotsSliceType: dynamic(() =>
    import("%slices/CaptionedScreenshots")
  ),
  CaptionedVideoSliceType: dynamic(() => import("%slices/CaptionedVideo")),
  CarouselImagesSliceType: dynamic(() => import("%slices/CarouselImages")),
  CarouselPhonesSliceType: dynamic(() => import("%slices/CarouselPhones")),
  FullTextSliceType: dynamic(() => import("%slices/FullText")),
  GridEmbedSliceType: dynamic(() => import("%slices/GridEmbed")),
  GridVideoSliceType: dynamic(() => import("%slices/GridVideo")),
  NewspaperSliceType: dynamic(() => import("%slices/Newspaper")),
  SubtitleSliceType: dynamic(() => import("%slices/Subtitle")),
};

type SliceProps = {
  slice: SlicePrismicType;
};

const Slice = (props: SliceProps): JSX.Element => {
  const { slice } = props;

  const SliceTypeComponent: React.ComponentType<any> =
    SliceTypeComponentMap[slice.type];

  return <SliceTypeComponent {...props} />;
};

export default Slice;
