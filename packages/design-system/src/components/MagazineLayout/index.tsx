import { CaptionedMagazineSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import Grid from "@mui/material/Grid";
import { motion } from "motion/react";

import { spring } from "../../motion/transition/spring";

export type MagazineLayoutProps = Readonly<{
  images: Array<CaptionedMagazineSliceTypeFieldFragment>;
}>;

const MotionGrid = motion(Grid);

export default function MagazineLayout({ images }: MagazineLayoutProps) {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <MotionGrid
          key={JSON.stringify(image)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          size={{ xs: 12, md: 6 }}
          transition={spring}
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
