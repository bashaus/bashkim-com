import { PrismicRichText, CarouselPhonesSliceType } from "@bashkim-com/prismic";

import { Carousel } from "../../components/Carousel";
import { CarouselImage } from "../../components/CarouselImage";
import { DeviceSmartphone } from "../../components/DeviceSmartphone";
import { DeviceFeaturePhone } from "../../components/DeviceFeaturePhone";
import { FullImagePartial } from "../../partials/FullImagePartial";

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
  <FullImagePartial>
    <Carousel slidesToShow={3} responsive={CAROUSEL_RESPONSIVE}>
      {slice.fields?.map((field, i) => {
        const {
          carousel_phones_slice_type_device_type: deviceType,
          carousel_phones_slice_type_caption: caption,
          carousel_phones_slice_type_image: image,
        } = field;

        if (!image || !deviceType) {
          return null;
        }

        const DeviceComponent = DeviceTypeComponents[deviceType];

        return (
          <CarouselImage
            key={i}
            figure={
              <DeviceComponent
                figure={
                  <img
                    src={image.url}
                    alt={image.alt || ""}
                    width={image.dimensions.width}
                    height={image.dimensions.height}
                  />
                }
              >
                <PrismicRichText render={caption} />
              </DeviceComponent>
            }
          />
        );
      })}
    </Carousel>
  </FullImagePartial>
);

export default CarouselPhonesSlice;
