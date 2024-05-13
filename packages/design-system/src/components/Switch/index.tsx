import classNames from "classnames";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./styles.module.scss";

export type SwitchProps = ComponentPropsWithoutRef<"input"> & {
  iconOff?: ReactNode;
  iconOn?: ReactNode;
};

export const Switch = ({
  className,
  checked = false,
  iconOff,
  iconOn,
  ...props
}: SwitchProps) => (
  <label
    className={classNames(className, styles["Switch"])}
    aria-checked={checked}
    data-testid="Switch"
  >
    <div className={styles["Slider"]}>
      {iconOff && <div className={styles["IconOff"]}>{iconOff}</div>}
      {iconOn && <div className={styles["IconOn"]}>{iconOn}</div>}
      <input
        type="checkbox"
        data-testid="Switch.Input"
        className={styles["Input"]}
        checked={checked}
        {...props}
      />
    </div>
  </label>
);
