import { RichText } from 'prismic-reactjs';
import React from 'react';

import PartialFullImage from '%components/PartialFullImage';
import Carousel from '%components/Carousel';
import CarouselImage from '%components/CarouselImage';
import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

const CarouselImagesSliceType = ({ slice }) => {
  /* repeat */
  const { items } = slice;

  return (
    <PartialFullImage>
      <Carousel>
        { items.map((item) => {
          const {
            CarouselImagesSliceType_Caption: caption,
            CarouselImagesSliceType_Image: image,
          } = item;

          return (
            <CarouselImage figure={(
              <img
                src={image.url}
                alt={image.alt}
                width={image.dimensions.width}
                height={image.dimensions.height}
              />
            )}>
              { caption && RichText.render(caption, LinkResolver) }
            </CarouselImage>
          );
        }) }
      </Carousel>
    </PartialFullImage>
  );
};

CarouselImagesSliceType.propTypes = {
  slice: SlicePropType.isRequired,
};

export default CarouselImagesSliceType;
