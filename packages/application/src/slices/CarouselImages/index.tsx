import { RichText } from "prismic-reactjs";
import type { CarouselImagesSliceType } from "@bashkim-com/prismic";

import PartialFullImage from "%partials/FullImage";
import Carousel from "%components/Carousel";
import CarouselImage from "%components/CarouselImage";
import LinkResolver from "%prismic/LinkResolver";

export type CarouselImagesSliceProps = {
  slice: CarouselImagesSliceType;
};

const CarouselImagesSlice = ({
  slice,
}: CarouselImagesSliceProps): JSX.Element => (
  <PartialFullImage>
    <Carousel>
      {slice.fields.map((field) => {
        const {
          carousel_images_slice_type_caption: caption,
          carousel_images_slice_type_image: image,
        } = field;

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

export default CarouselImagesSlice;
