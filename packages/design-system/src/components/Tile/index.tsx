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
  <article
    className={styles.Tile}
    itemScope
    itemType="http://schema.org/CreativeWork"
  >
    <h3 itemProp="headline">{title}</h3>

    <div
      className={styles.Poster}
      style={{
        backgroundImage: `url(${poster})`,
      }}
    />

    <div className={styles.Icon}>
      <img alt="" itemProp="image" src={icon} />
    </div>

    <p itemProp="description">{description}</p>
  </article>
);
