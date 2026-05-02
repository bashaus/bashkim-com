import Stack from "@mui/material/Stack";

import CarouselButtons from "../CarouselButtons";
import CarouselSlider from "../CarouselSlider";
import { useCarouselPagination } from "./hooks";

export default function CarouselPagination() {
  const { scrollSnaps } = useCarouselPagination();

  if (scrollSnaps.length <= 1) {
    return null;
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CarouselButtons />
      <CarouselSlider />
    </Stack>
  );
}
