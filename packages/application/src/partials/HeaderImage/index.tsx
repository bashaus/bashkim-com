import classNames from "classnames";

import styles from "./styles.module.scss";

export type PartialHeaderImageProps = {
  className?: string;
  id: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const PartialHeaderImage = ({
  className,
  id,
  imageDesktop,
  imageMobile,
}: PartialHeaderImageProps): JSX.Element => (
  <header id={id} className={className}>
    {imageDesktop && (
      <style type="text/css">
        {`
          #${id} .background {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    )}

    {imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} .background {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    )}

    <div
      aria-hidden="true"
      className={classNames(styles.background, "background")}
    />
  </header>
);
