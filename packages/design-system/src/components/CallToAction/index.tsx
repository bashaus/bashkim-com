import { ReactNode } from "react";
import styles from "./styles.module.scss";

export type CallToActionProps = {
  /**
   * The content of the call to action.
   * In code, this should be wrapped with:
   * `<a><span>...</span></a>`
   */
  children: ReactNode;
};

export const CallToAction = ({ children }: CallToActionProps): JSX.Element => (
  <div className={styles.CallToAction}>{children}</div>
);
