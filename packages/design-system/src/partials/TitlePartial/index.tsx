import { ReactNode } from "react";
import styles from "./styles.module.scss";

export type TitlePartialProps = {
  children?: ReactNode;
  image?: string;
};

export const TitlePartial = ({
  children,
  image,
}: TitlePartialProps): JSX.Element => (
  <header className={styles.TitlePartial}>
    <div>{children}</div>
    {image && <img src={image} alt="" />}
  </header>
);
