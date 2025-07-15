import Stack from "@mui/material/Stack";

import CarouselDot from "../CarouselDot";
import { useCarouselPagination } from "../CarouselPagination/hooks";

export default function CarouselDots() {
  const { scrollSnaps, onChange, selectedIndex } = useCarouselPagination();

  return (
    <Stack direction="row" spacing={1}>
      {scrollSnaps.map((key, index) => (
        <CarouselDot
          key={key}
          onClick={() => onChange(index)}
          aria-selected={index === selectedIndex ? "true" : "false"}
        />
      ))}
    </Stack>
  );
}
