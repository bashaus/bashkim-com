import styles from "./styles.module.scss";

export type BrickProps = {
  /**
   * The description text, wrapped with `<p>`
   */
  description: React.ReactNode;

  /**
   * A URL to the image to use as the icon
   */
  icon: string;

  /**
   * The title or heading, wrapped with `<h3>`
   */
  title: React.ReactNode;
};

export const Brick = ({
  description,
  icon,
  title,
}: BrickProps): JSX.Element => (
  <article className={styles.Brick}>
    <div className={styles.inner}>
      <h3>{title}</h3>

      <div className={styles.image}>
        <img alt="" src={icon} />
      </div>

      <p>{description}</p>
    </div>
  </article>
);
