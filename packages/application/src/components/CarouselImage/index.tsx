import styles from "./styles.module.scss";

export type CarouselImageProps = {
  figure?: React.ReactNode;
  children?: React.ReactNode;
};

export const CarouselImage = ({
  children,
  figure,
}: CarouselImageProps): JSX.Element => (
  <figure className={styles.CarouselImage}>
    <div className={styles.figure}>{figure}</div>
    {children && <figcaption>{children}</figcaption>}
  </figure>
);
