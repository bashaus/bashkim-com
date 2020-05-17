import { RichText } from "prismic-reactjs";
import React from "react";
import { CarouselImagesSliceType } from "@bashkim-com/prismic";

import PartialFullImage from "%partials/FullImage";
import Carousel from "%components/Carousel";
import CarouselImage from "%components/CarouselImage";
import LinkResolver from "%prismic/LinkResolver";

interface CarouselImagesSliceProps {
  slice: CarouselImagesSliceType;
}

const CarouselImagesSlice = ({
  slice,
}: CarouselImagesSliceProps): JSX.Element => {
  /* repeat */
  const { items } = slice;

  return (
    <PartialFullImage>
      <Carousel>
        {items.map((item) => {
          const {
            CarouselImagesSliceType_Caption: caption,
            CarouselImagesSliceType_Image: image,
          } = item;

          return (
            <CarouselImage
              key={image.url}
              figure={
                <img
                  src={image.url}
                  alt={image.alt || ""}
                  width={image.dimensions.width}
                  height={image.dimensions.height}
                />
              }
            >
              {caption && RichText.render(caption, LinkResolver)}
            </CarouselImage>
          );
        })}
      </Carousel>
    </PartialFullImage>
  );
};

export default CarouselImagesSlice;
