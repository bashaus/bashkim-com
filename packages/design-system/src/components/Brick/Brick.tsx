import classNames from "classnames";
import { ComponentPropsWithRef, ReactNode } from "react";

import styles from "./Brick.module.scss";

export type BrickProps = ComponentPropsWithRef<"article"> & {
  /**
   * The description text, will be wrapped in a `<p>` tag
   */
  description?: string;

  /**
   * A URL to the image to use as the icon
   */
  icon: ReactNode;

  /**
   * The title or heading, will be wrapped in a `<h3>` tag
   */
  title?: string;
};

export const Brick = ({
  className,
  description,
  icon,
  title,
  ...restProps
}: BrickProps) => (
  <article className={classNames(className, styles["Brick"])} {...restProps}>
    <div className={styles["Content"]}>
      <h3 className={styles["Heading"]}>{title}</h3>
      <div className={styles["Image"]}>{icon}</div>
      {description && <p className={styles["Description"]}>{description}</p>}
    </div>
  </article>
);
