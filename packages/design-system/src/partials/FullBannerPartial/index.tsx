import { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export type FullBannerPartialProps = Readonly<
  PropsWithChildren<{
    backgroundDesktop?: string;
    backgroundMobile?: string;
    id: string;
  }>
>;

export default function FullBannerPartial({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}: FullBannerPartialProps) {
  return (
    <div className={styles["FullBannerPartial"]} id={id}>
      <div className={styles["Container"]}>
        <div className={styles["Content"]}>{children}</div>
      </div>

      {backgroundDesktop && (
        <style type="text/css">
          {`
          #${id} {
            background-image: url(${backgroundDesktop});
          }
        `}
        </style>
      )}

      {backgroundMobile && (
        <style type="text/css">
          {`
          @media screen and (max-width: 767px) {
            #${id} {
              background-image: url(${backgroundMobile});
            }
          }
        `}
        </style>
      )}
    </div>
  );
}
