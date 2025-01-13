import { ReactNode } from "react";

import styles from "./styles.module.scss";

export type TitlePartialProps = {
  children?: ReactNode;
  image?: string;
};

export default function TitlePartial({ children, image }: TitlePartialProps) {
  return (
    <header className={styles["TitlePartial"]}>
      <div className={styles["Content"]}>{children}</div>
      {image && <img className={styles["Image"]} src={image} alt="" />}
    </header>
  );
}
