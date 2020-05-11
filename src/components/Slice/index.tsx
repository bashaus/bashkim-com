import dynamic from "next/dynamic";
import React from "react";

import SlicePropType from "%prismic/types/slice";

interface SliceProps {
  slice: SlicePropType;
}

const SliceBundle: { [key: string]: any } = {
  CaptionedImageSliceType: dynamic(() =>
    import("%prismic/slice-types/CaptionedImage/component")
  ),
  CaptionedMagazineSliceType: dynamic(() =>
    import("%prismic/slice-types/CaptionedMagazine/component")
  ),
  CaptionedScreenshotsSliceType: dynamic(() =>
    import("%prismic/slice-types/CaptionedScreenshots/component")
  ),
  CaptionedVideoSliceType: dynamic(() =>
    import("%prismic/slice-types/CaptionedVideo/component")
  ),
  CarouselImagesSliceType: dynamic(() =>
    import("%prismic/slice-types/CarouselImages/component")
  ),
  CarouselPhonesSliceType: dynamic(() =>
    import("%prismic/slice-types/CarouselPhones/component")
  ),
  FullTextSliceType: dynamic(() =>
    import("%prismic/slice-types/FullText/component")
  ),
  NewspaperSliceType: dynamic(() =>
    import("%prismic/slice-types/Newspaper/component")
  ),
  SubtitleSliceType: dynamic(() =>
    import("%prismic/slice-types/Subtitle/component")
  ),
  GridEmbedSliceType: dynamic(() =>
    import("%prismic/slice-types/GridEmbed/component")
  ),
  GridVideoSliceType: dynamic(() =>
    import("%prismic/slice-types/GridVideo/component")
  ),
};

const Slice = (props: SliceProps): JSX.Element => {
  const { slice } = props;
  const DynamicComponent: React.ComponentClass = SliceBundle[slice.slice_type];

  return <DynamicComponent {...props} />;
};

export default Slice;
