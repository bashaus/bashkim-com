import React from "react";

import styles from "./styles.module.scss";

interface CarouselImageProps {
  figure?: React.ReactNode;
  children?: React.ReactNode;
}

const CarouselImage = ({
  children,
  figure,
}: CarouselImageProps): JSX.Element => (
  <figure className={styles.CarouselImage}>
    <div className={styles.figure}>{figure}</div>

    {children && <figcaption>{children}</figcaption>}
  </figure>
);

export default CarouselImage;
