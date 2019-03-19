import dynamic from 'next/dynamic';
import React from 'react';

import SlicePropType from '%prismic/prop-types/slice';

const SliceBundle = dynamic({
  modules: () => ({
    CaptionedImageSliceType: import('%prismic/slice-types/CaptionedImage/component'),
    CaptionedMagazineSliceType: import('%prismic/slice-types/CaptionedMagazine/component'),
    CaptionedScreenshotsSliceType: import('%prismic/slice-types/CaptionedScreenshots/component'),
    CaptionedVideoSliceType: import('%prismic/slice-types/CaptionedVideo/component'),
    CarouselImagesSliceType: import('%prismic/slice-types/CarouselImages/component'),
    CarouselPhonesSliceType: import('%prismic/slice-types/CarouselPhones/component'),
    FullTextSliceType: import('%prismic/slice-types/FullText/component'),
    NewspaperSliceType: import('%prismic/slice-types/Newspaper/component'),
    SubtitleSliceType: import('%prismic/slice-types/Subtitle/component'),
    GridEmbedSliceType: import('%prismic/slice-types/GridEmbed/component'),
    GridVideoSliceType: import('%prismic/slice-types/GridVideo/component'),
  }),
  render: (props, ComponentList) => {
    const { slice } = props;
    const SliceComponent = ComponentList[slice.slice_type];
    return <SliceComponent {...props} />;
  },
});

export default function Slice(props) {
  return <SliceBundle {...props} />;
}

Slice.propTypes = {
  slice: SlicePropType.isRequired,
};
