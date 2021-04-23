import type { CarouselPhonesSliceType } from "@bashkim-com/prismic";

import Carousel from "%components/Carousel";
import CarouselImage from "%components/CarouselImage";
import DeferredAsset from "%components/DeferredAsset";
import DeviceSmartphone from "%components/DeviceSmartphone";
import DeviceFeaturePhone from "%components/DeviceFeaturePhone";
import PartialFullImage from "%partials/FullImage";

import { PrismicRichText } from "%prismic/helpers/RichText";

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

const CarouselPhonesSlice = ({
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
