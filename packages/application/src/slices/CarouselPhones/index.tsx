import {
  Carousel,
  CarouselImage,
  DeviceSmartphone,
  DeviceFeaturePhone,
  PartialFullImage,
} from "@bashkim-com/design-system";
import { PrismicRichText, CarouselPhonesSliceType } from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";

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

export type CarouselPhonesSliceProps = {
  slice: CarouselPhonesSliceType;
};

export const CarouselPhonesSlice = ({
  slice,
}: CarouselPhonesSliceProps): JSX.Element => (
  <PartialFullImage>
    <Carousel slidesToShow={3} responsive={CAROUSEL_RESPONSIVE}>
      {slice.fields.map((field, i) => {
        const {
          carousel_phones_slice_type_device_type: deviceType,
          carousel_phones_slice_type_caption: caption,
          carousel_phones_slice_type_image: image,
        } = field;

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
                <PrismicRichText render={caption} />
              </DeviceComponent>
            }
          />
        );
      })}
    </Carousel>
  </PartialFullImage>
);

export default CarouselPhonesSlice;
