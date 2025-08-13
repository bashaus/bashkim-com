import { CaptionedMagazineSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { motion } from "motion/react";
import HTMLFlipBook from "react-pageflip";

import { spring } from "../../motion/transition/spring";

export type MagazineFlipBookProps = Readonly<{
  images: Array<CaptionedMagazineSliceTypeFieldFragment>;
}>;

export default function MagazineFlipBook({ images }: MagazineFlipBookProps) {
  const firstImage = images[0].captioned_magazine_slice_type_images;

  return (
    <motion.div
      key="FlipBook"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={spring}
    >
      <HTMLFlipBook
        width={firstImage.dimensions.width}
        height={firstImage.dimensions.height}
        className=""
        style={{}}
        startPage={0}
        size="stretch"
        minWidth={firstImage.dimensions.width / 2}
        maxWidth={firstImage.dimensions.width}
        minHeight={firstImage.dimensions.height / 2}
        maxHeight={firstImage.dimensions.height}
        drawShadow={true}
        flippingTime={300}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.3}
        showCover={true}
        mobileScrollSupport={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={50}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {images.map((image) => (
          <img
            key={JSON.stringify(image)}
            src={image.captioned_magazine_slice_type_images.url}
            alt={image.captioned_magazine_slice_type_images.alt ?? ""}
            width={image.captioned_magazine_slice_type_images.width}
            height={image.captioned_magazine_slice_type_images.height}
          />
        ))}
      </HTMLFlipBook>
    </motion.div>
  );
}
