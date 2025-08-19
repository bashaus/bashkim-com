import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { CarouselPhonesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { useMemo } from "react";

import Carousel from "../../carousel/Carousel";
import CarouselImage from "../../carousel/CarouselImage";
import DeviceFeaturePhone from "../../devices/DeviceFeaturePhone";
import DeviceSmartphone from "../../devices/DeviceSmartphone";
import FullImagePartial from "../../partials/FullImagePartial";

const DeviceTypeComponents: Record<
  string,
  typeof DeviceSmartphone | typeof DeviceFeaturePhone
> = {
  SMARTPHONE: DeviceSmartphone,
  FEATURE_PHONE: DeviceFeaturePhone,
};

export type CarouselPhonesSliceProps = Readonly<{
  slice: CarouselPhonesSliceTypeFragment;
}>;

export default function CarouselPhonesSlice({
  slice,
}: CarouselPhonesSliceProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const slidesVisible = useMemo(() => {
    switch (true) {
      case isSmallScreen: {
        return 1;
      }
      case isMediumScreen: {
        return 2;
      }
      default: {
        return 3;
      }
    }
  }, [isMediumScreen, isSmallScreen]);

  return (
    <FullImagePartial>
      <Carousel slidesVisible={slidesVisible}>
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
                  <RichTextFormatter field={caption} />
                </DeviceComponent>
              }
            />
          );
        })}
      </Carousel>
    </FullImagePartial>
  );
}
