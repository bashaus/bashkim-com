import { ReactNode } from "react";

import styles from "./styles.module.scss";

export type PageHeaderPartialProps = {
  aside?: ReactNode;
  children?: ReactNode;
  id?: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const PageHeaderPartial = ({
  aside,
  children,
  id,
  imageDesktop,
  imageMobile,
}: PageHeaderPartialProps) => (
  <header className={styles["PageHeaderPartial"]} id={id}>
    {id && imageDesktop && (
      <style type="text/css">
        {`
          #${id} {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    )}

    {id && imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    )}

    <div className={styles["Foreground"]}>
      <div className={styles["Content"]}>{children}</div>
      {aside && <aside className={styles["Aside"]}>{aside}</aside>}
    </div>
  </header>
);
