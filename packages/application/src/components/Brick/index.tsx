import styles from "./styles.module.scss";

export type BrickProps = {
  title: string;
  icon: string;
  description: string;
};

export const Brick = ({
  title,
  icon,
  description,
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
