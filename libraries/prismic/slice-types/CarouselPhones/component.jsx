import { RichText } from 'prismic-reactjs';
import React from 'react';

import Carousel from '%components/Carousel';
import CarouselImage from '%components/CarouselImage';
import DeviceSmartphone from '%components/DeviceSmartphone';
import PartialFullImage from '%components/PartialFullImage';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

const CAROUSEL_RESPONSIVE = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 1023,
    settings: {
      slidesToShow: 2,
    },
  },
];

export default function CarouselPhonesSliceType(props) {
  const { slice } = props;

  /* repeat */
  const { items } = slice;

  return (
    <PartialFullImage>
      <Carousel slidesToShow={3} responsive={CAROUSEL_RESPONSIVE}>
        { items.map((item, i) => {
          const {
            CarouselPhonesSliceType_Caption: caption,
            CarouselPhonesSliceType_Image: image,
          } = item;

          return (
            <CarouselImage
              key={i}
              figure={(
                <DeviceSmartphone figure={image.url}>
                  { caption && RichText.render(caption, LinkResolver) }
                </DeviceSmartphone>
              )}
            />
          );
        }) }
      </Carousel>
    </PartialFullImage>
  );
}

CarouselPhonesSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};
