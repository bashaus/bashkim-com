import styles from "./styles.module.scss";

export type BrickProps = {
  /**
   * The description text, will be wrapped in a `<p>` tag
   */
  description?: string;

  /**
   * A URL to the image to use as the icon
   */
  icon: string;

  /**
   * The title or heading, will be wrapped in a `<h3>` tag
   */
  title?: string;
};

export const Brick = ({
  description,
  icon,
  title,
}: BrickProps): JSX.Element => (
  <article className={styles.Brick}>
    <div className={styles.Content}>
      <h3>{title}</h3>

      <div className={styles.Image}>
        <img alt="" src={icon} />
      </div>

      {description && <p>{description}</p>}
    </div>
  </article>
);
