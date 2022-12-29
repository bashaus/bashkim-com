import styles from "./Tile.module.scss";

export type TileProps = {
  description: string;
  icon: string;
  poster: string;
  title: string;
};

export const Tile = ({ description, title, icon, poster }: TileProps) => (
  <div className={styles["Tile"]}>
    <div
      className={styles["Poster"]}
      style={{ backgroundImage: `url(${poster})` }}
    />

    <div className={styles["Content"]}>
      <h3 className={styles["Heading"]}>{title}</h3>

      <div className={styles["Icon"]}>
        <img alt="" src={icon} />
      </div>

      <p className={styles["Description"]}>{description}</p>
    </div>
  </div>
);
