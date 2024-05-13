import type { CarouselPhonesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Image from "next/image";

import { Carousel } from "../../components/Carousel";
import { CarouselImage } from "../../components/CarouselImage";
import { DeviceFeaturePhone } from "../../components/DeviceFeaturePhone";
import { DeviceSmartphone } from "../../components/DeviceSmartphone";
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

const DeviceTypeComponents: Record<
  string,
  typeof DeviceSmartphone | typeof DeviceFeaturePhone
> = {
  SMARTPHONE: DeviceSmartphone,
  FEATURE_PHONE: DeviceFeaturePhone,
};

export type CarouselPhonesSliceProps = {
  slice: CarouselPhonesSliceTypeFragment;
};

export const CarouselPhonesSlice = ({ slice }: CarouselPhonesSliceProps) => (
  <FullImagePartial>
    <Carousel slidesToShow={3} responsive={CAROUSEL_RESPONSIVE}>
      {slice.fields?.map((field) => {
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
            key={JSON.stringify(field)}
            figure={
              <DeviceComponent
                figure={
                  <Image
                    src={image.url}
                    alt={image.alt ?? ""}
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
