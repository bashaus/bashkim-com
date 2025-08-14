import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CarouselButton, { CarouselButtonProps } from "../CarouselButton";

export type CarouselButtonNextProps = Readonly<
  Omit<CarouselButtonProps, "children">
>;

export default function CarouselButtonNext(props: CarouselButtonNextProps) {
  return (
    <CarouselButton aria-label="Next" {...props}>
      <ChevronRightIcon />
    </CarouselButton>
  );
}
