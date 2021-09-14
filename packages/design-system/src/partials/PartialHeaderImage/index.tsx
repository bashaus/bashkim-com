import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type PartialHeaderImageProps = {
  backgroundClassName?: string;
  className?: string;
  id: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const PartialHeaderImage = ({
  backgroundClassName,
  className,
  id,
  imageDesktop,
  imageMobile,
}: PartialHeaderImageProps): JSX.Element => (
  <header id={id} className={className}>
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

    <div
      aria-hidden="true"
      className={classNames(styles.Background, backgroundClassName)}
    />
  </header>
);
