import Slider, { SliderProps } from "@mui/material/Slider";

import { useCarouselPagination } from "../CarouselPagination/hooks";

export type CarouselSliderProps = Readonly<
  Omit<SliderProps, "min" | "max" | "value" | "step" | "onChange">
>;

export default function CarouselSlider(props: CarouselSliderProps) {
  const { scrollSnaps, onChange, selectedIndex } = useCarouselPagination();

  return (
    <Slider
      {...props}
      min={0}
      max={scrollSnaps.length - 1}
      step={1}
      value={selectedIndex}
      onChange={(_event, value) => onChange(+value)}
      aria-label="Slide selector"
    />
  );
}
