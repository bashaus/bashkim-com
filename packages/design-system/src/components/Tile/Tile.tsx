import { ComponentPropsWithRef, ReactNode } from "react";

import styles from "./Tile.module.scss";

export type TileProps = ComponentPropsWithRef<"div"> & {
  description?: string;
  icon?: ReactNode;
  poster?: string;
  title?: string;
};

export const Tile = ({
  description,
  title,
  icon,
  poster,
  ...props
}: TileProps) => (
  <div className={styles["Tile"]} {...props}>
    {poster && (
      <div
        className={styles["Poster"]}
        style={{ backgroundImage: `url(${poster})` }}
      />
    )}

    <div className={styles["Content"]}>
      {title && <h3 className={styles["Heading"]}>{title}</h3>}
      {icon && <div className={styles["Icon"]}>{icon}</div>}
      {description && <p className={styles["Description"]}>{description}</p>}
    </div>
  </div>
);
