import React from "react";

import styles from "./styles.module.scss";

export type PartialHeaderImageProps = {
  id: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const PartialHeaderImage = ({
  id,
  imageDesktop,
  imageMobile,
}: PartialHeaderImageProps): JSX.Element => (
  <header id={id}>
    {imageDesktop && (
      <style type="text/css">
        {`
          #${id} .${styles.Background} {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    )}

    {imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} .${styles.Background} {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    )}

    <div aria-hidden="true" className={styles.Background} />
  </header>
);
