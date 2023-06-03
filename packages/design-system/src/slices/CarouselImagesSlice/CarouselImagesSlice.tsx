import type { CarouselImagesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Image from "next/image";

import { Carousel } from "../../components/Carousel/Carousel";
import { CarouselImage } from "../../components/CarouselImage/CarouselImage";
import { FullImagePartial } from "../../partials/FullImagePartial/FullImagePartial";

export type CarouselImagesSliceProps = {
  slice: CarouselImagesSliceTypeFragment;
};

export const CarouselImagesSlice = ({ slice }: CarouselImagesSliceProps) => (
  <FullImagePartial>
    <Carousel>
      {slice.fields?.map((field) => {
        const {
          carousel_images_slice_type_caption: caption,
          carousel_images_slice_type_image: image,
        } = field;

        if (!image) {
          return null;
        }

        return (
          <CarouselImage
            key={image.url}
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
          </CarouselImage>
        );
      })}
    </Carousel>
  </FullImagePartial>
);

export default CarouselImagesSlice;
