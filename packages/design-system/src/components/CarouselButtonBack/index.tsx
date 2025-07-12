import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import CarouselButton, { CarouselButtonProps } from "../CarouselButton";

export type CarouselButtonBackProps = Readonly<
  Omit<CarouselButtonProps, "children">
>;

export default function CarouselButtonBack(props: CarouselButtonBackProps) {
  return (
    <CarouselButton {...props}>
      <ChevronLeftIcon aria-label="Back" />
    </CarouselButton>
  );
}
