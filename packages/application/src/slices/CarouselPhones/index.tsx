import { RichText } from "prismic-reactjs";
import React from "react";
import { CarouselPhonesSliceType } from "@bashkim-com/prismic";

import Carousel from "%components/Carousel";
import CarouselImage from "%components/CarouselImage";
import DeferredAsset from "%components/DeferredAsset";
import DeviceSmartphone from "%components/DeviceSmartphone";
import DeviceFeaturePhone from "%components/DeviceFeaturePhone";
import PartialFullImage from "%partials/FullImage";
import LinkResolver from "%prismic/LinkResolver";

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

const DeviceTypeComponents = {
  SMARTPHONE: DeviceSmartphone,
  FEATURE_PHONE: DeviceFeaturePhone,
};

type CarouselPhonesSliceProps = {
  slice: CarouselPhonesSliceType;
};

const CarouselPhonesSlice = ({
  slice,
}: CarouselPhonesSliceProps): JSX.Element => {
  /* repeat */
  const { items } = slice;

  return (
    <PartialFullImage>
      <Carousel slidesToShow={3} responsive={CAROUSEL_RESPONSIVE}>
        {items.map((item, i) => {
          const {
            CarouselPhonesSliceType_DeviceType: deviceType,
            CarouselPhonesSliceType_Caption: caption,
            CarouselPhonesSliceType_Image: image,
          } = item;

          const DeviceComponent = DeviceTypeComponents[deviceType];

          return (
            <CarouselImage
              key={i}
              figure={
                <DeviceComponent
                  figure={
                    <DeferredAsset
                      width={image.dimensions.width}
                      height={image.dimensions.height}
                    >
                      <img
                        src={image.url}
                        alt={image.alt || ""}
                        width={image.dimensions.width}
                        height={image.dimensions.height}
                      />
                    </DeferredAsset>
                  }
                >
                  {caption && RichText.render(caption, LinkResolver)}
                </DeviceComponent>
              }
            />
          );
        })}
      </Carousel>
    </PartialFullImage>
  );
};

export default CarouselPhonesSlice;
