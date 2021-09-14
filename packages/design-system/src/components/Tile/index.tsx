import React from "react";
import styles from "./styles.module.scss";

export type TileProps = {
  description: string;
  icon: string;
  poster: string;
  title: string;
};

export const Tile = ({
  description,
  title,
  icon,
  poster,
}: TileProps): JSX.Element => (
  <div className={styles.Tile}>
    <div
      className={styles.Poster}
      style={{
        backgroundImage: `url(${poster})`,
      }}
    />

    <div className={styles.Content}>
      <h3>{title}</h3>

      <div className={styles.Icon}>
        <img alt="" src={icon} />
      </div>

      <p>{description}</p>
    </div>
  </div>
);
