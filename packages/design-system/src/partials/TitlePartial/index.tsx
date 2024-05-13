import { ReactNode } from "react";

import styles from "./styles.module.scss";

export type TitlePartialProps = {
  children?: ReactNode;
  image?: string;
};

export const TitlePartial = ({ children, image }: TitlePartialProps) => (
  <header className={styles["TitlePartial"]}>
    <div className={styles["Content"]}>{children}</div>
    {image && <img className={styles["Image"]} src={image} alt="" />}
  </header>
);
