import { PrismicRichText, CarouselImagesSliceType } from "@bashkim-com/prismic";

import { Carousel } from "../../components/Carousel";
import { CarouselImage } from "../../components/CarouselImage";
import { FullImagePartial } from "../../partials/FullImagePartial";

export type CarouselImagesSliceProps = {
  slice: CarouselImagesSliceType;
};

export const CarouselImagesSlice = ({
  slice,
}: CarouselImagesSliceProps): JSX.Element => (
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
              <img
                src={image.url}
                alt={image.alt || ""}
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
