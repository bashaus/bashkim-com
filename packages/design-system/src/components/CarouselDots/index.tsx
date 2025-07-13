import Stack from "@mui/material/Stack";

import CarouselDot from "../CarouselDot";
import { useCarouselDots } from "./hooks";

export default function CarouselDots() {
  const { scrollSnaps, onDotClick, selectedIndex } = useCarouselDots();

  return (
    <Stack direction="row" spacing={1}>
      {scrollSnaps.map((key, index) => (
        <CarouselDot
          key={key}
          onClick={() => onDotClick(index)}
          aria-selected={index === selectedIndex ? "true" : "false"}
        />
      ))}
    </Stack>
  );
}
