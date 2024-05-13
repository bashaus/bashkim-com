import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type FullBannerPartialProps = {
  backgroundDesktop?: string;
  backgroundMobile?: string;
  children: ReactNode;
  id: string;
};

export const FullBannerPartial = ({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}: FullBannerPartialProps) => (
  <div className={styles["FullBannerPartial"]} id={id}>
    <div className={styles["Container"]}>
      <div className={styles["Content"]}>
        <RichTextFormatter>{children}</RichTextFormatter>
      </div>
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
