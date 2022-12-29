import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./CarouselImage.module.scss";

export type CarouselImageProps = {
  figure?: ReactNode;
  children?: ReactNode;
};

export const CarouselImage = ({ children, figure }: CarouselImageProps) => (
  <figure className={styles["CarouselImage"]}>
    <div className={styles["Figure"]}>{figure}</div>

    {children && (
      <figcaption>
        <RichTextFormatter>{children}</RichTextFormatter>
      </figcaption>
    )}
  </figure>
);
