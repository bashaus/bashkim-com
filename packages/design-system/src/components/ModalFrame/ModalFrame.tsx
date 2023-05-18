import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./ModalFrame.module.scss";

export type ModalFrameProps = ComponentPropsWithoutRef<"div">;

export const ModalFrame = ({ className, ...props }: ModalFrameProps) => (
  <div className={classNames(className, styles["ModalFrame"])} {...props} />
);
