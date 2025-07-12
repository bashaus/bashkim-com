import Stack from "@mui/material/Stack";

import CarouselButtonBack from "../CarouselButtonBack";
import CarouselButtonNext from "../CarouselButtonNext";
import { useCarouselButtons } from "./hooks";

export default function CarouselButtons() {
  const { prevDisabled, nextDisabled, onPrev, onNext } = useCarouselButtons();

  return (
    <Stack direction="row" spacing={1}>
      <CarouselButtonBack onClick={onPrev} disabled={prevDisabled} />
      <CarouselButtonNext onClick={onNext} disabled={nextDisabled} />
    </Stack>
  );
}
