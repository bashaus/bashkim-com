import React from "react";

import styles from "./styles.module.scss";

interface PartialFullBannerProps {
  backgroundDesktop?: string;
  backgroundMobile?: string;
  children: React.ReactNode;
  id: string;
}

const PartialFullBanner = ({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}: PartialFullBannerProps): JSX.Element => (
  <div className={styles.PartialFullBanner} id={id}>
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
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

export default PartialFullBanner;
