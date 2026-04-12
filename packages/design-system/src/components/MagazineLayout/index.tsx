import { CaptionedMagazineSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import Grid from "@mui/material/Grid";
import { motion, Variants } from "motion/react";

import { spring } from "../../motion/transition/spring";

export type MagazineLayoutProps = Readonly<{
  images: Array<CaptionedMagazineSliceTypeFieldFragment>;
}>;

const MotionGrid = motion(Grid);

const animationVariant: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...spring,
      delay: 0.1 + i * 0.1,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0.95,
    transition: {
      ...spring,
      delay: i * 0.1,
    },
  }),
};

export default function MagazineLayout({ images }: MagazineLayoutProps) {
  let custom = 0;

  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <MotionGrid
          key={JSON.stringify(image)}
          size={{ xs: 12, md: 6 }}
          custom={custom++}
          variants={animationVariant}
          initial="initial"
          exit="exit"
          animate="animate"
        >
          <img
            src={image.captioned_magazine_slice_type_images.url}
            alt={image.captioned_magazine_slice_type_images.alt ?? ""}
            width={image.captioned_magazine_slice_type_images.width}
            height={image.captioned_magazine_slice_type_images.height}
          />
        </MotionGrid>
      ))}
    </Grid>
  );
}
