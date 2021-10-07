import { ReactNode } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./styles.module.scss";

export type CarouselImageProps = {
  figure?: ReactNode;
  children?: ReactNode;
};

export const CarouselImage = ({
  children,
  figure,
}: CarouselImageProps): JSX.Element => (
  <figure className={styles.CarouselImage}>
    <div className={styles.Figure}>{figure}</div>
    {children && (
      <figcaption>
        <FormattedRichText>{children}</FormattedRichText>
      </figcaption>
    )}
  </figure>
);
