import React from "react";
import styles from "./styles.module.scss";

export type PartialFullBannerProps = {
  backgroundDesktop?: string;
  backgroundMobile?: string;
  children: React.ReactNode;
  id: string;
};

export const PartialFullBanner = ({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}: PartialFullBannerProps): JSX.Element => (
  <div className={styles.PartialFullBanner} id={id}>
    <div className={styles.Container}>
      <div className={styles.Content}>{children}</div>
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
