import dynamic from "next/dynamic";
import React from "react";

import { SlicePrismicType } from "@bashkim-com/prismic";

interface SliceProps {
  slice: SlicePrismicType;
}

const SliceBundle: { [key: string]: any } = {
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
  NewspaperSliceType: dynamic(() => import("%slices/Newspaper")),
  SubtitleSliceType: dynamic(() => import("%slices/Subtitle")),
  GridEmbedSliceType: dynamic(() => import("%slices/GridEmbed")),
  GridVideoSliceType: dynamic(() => import("%slices/GridVideo")),
};

const Slice = (props: SliceProps): JSX.Element => {
  const { slice } = props;
  const DynamicComponent: React.ComponentClass = SliceBundle[slice.slice_type];

  return <DynamicComponent {...props} />;
};

export default Slice;
