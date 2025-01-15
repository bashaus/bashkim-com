import { PropsWithChildren, ReactNode } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type CarouselImageProps = Readonly<
  PropsWithChildren<{
    figure?: ReactNode;
  }>
>;

export default function CarouselImage({
  children,
  figure,
}: CarouselImageProps) {
  return (
    <figure className={styles["CarouselImage"]}>
      <div className={styles["Figure"]}>{figure}</div>

      {children && (
        <figcaption>
          <RichTextFormatter>{children}</RichTextFormatter>
        </figcaption>
      )}
    </figure>
  );
}
