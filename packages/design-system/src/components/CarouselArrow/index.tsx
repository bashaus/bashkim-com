import classNames from "classnames";
import { ComponentPropsWithRef } from "react";

import styles from "./styles.module.scss";
import { CarouselArrowDirection } from "./types";

export type CarouselArrowProps = ComponentPropsWithRef<"button"> & {
  direction: CarouselArrowDirection;
};

export const CarouselArrow = ({
  className,
  direction,
  ...props
}: CarouselArrowProps) => (
  <button
    className={classNames(
      className,
      direction === CarouselArrowDirection.NEXT && styles["CarouselArrowNext"],
      direction === CarouselArrowDirection.PREV && styles["CarouselArrowPrev"],
    )}
    {...props}
  >
    {direction === CarouselArrowDirection.NEXT && "Next"}
    {direction === CarouselArrowDirection.PREV && "Previous"}
  </button>
);
