import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type CallToActionProps = ComponentPropsWithoutRef<"div">;

export const CallToAction = ({
  className,
  ...restProps
}: CallToActionProps) => (
  <div
    className={classNames(className, styles["CallToAction"])}
    {...restProps}
  />
);
