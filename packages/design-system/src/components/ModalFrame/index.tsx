import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type ModalFrameProps = ComponentPropsWithoutRef<"div">;

export default function ModalFrame({ className, ...props }: ModalFrameProps) {
  return (
    <div className={classNames(className, styles["ModalFrame"])} {...props} />
  );
}
