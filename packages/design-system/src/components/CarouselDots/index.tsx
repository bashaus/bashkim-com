import Stack from "@mui/material/Stack";

import CarouselDot from "../CarouselDot";
import { useCarouselDots } from "./hooks";

export default function CarouselDots() {
  const { scrollSnaps, onDotClick, selectedIndex } = useCarouselDots();

  return (
    <Stack direction="row" spacing={1}>
      {scrollSnaps.map((_, index) => (
        <CarouselDot
          key={index}
          onClick={() => onDotClick(index)}
          aria-selected={index === selectedIndex ? "true" : "false"}
        />
      ))}
    </Stack>
  );
}
