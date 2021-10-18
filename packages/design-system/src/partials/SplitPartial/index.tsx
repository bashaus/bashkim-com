import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type SplitPartialProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
};

export const SplitPartial = ({
  className,
  index = 0,
  ...props
}: SplitPartialProps): JSX.Element => (
  <div
    className={classNames(className, styles.SplitPartial, {
      [styles.isOdd]: index % 2 === 1,
      [styles.isEven]: index % 2 === 0,
    })}
    {...props}
  />
);
