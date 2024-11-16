import styles from "./styles.module.scss";

export type LogoProps = {
  animated?: boolean;
};

export const Logo = ({ animated = false }: LogoProps) => {
  return (
    <div className={styles["Logo"]}>
      <span className={styles["Command"]}>
        bash:<span className={styles["CommandPath"]}>~</span>$&nbsp;
      </span>
      {animated && <span className={styles["Typewriter"]} />}
      {!animated && <span>bashkim isai</span>}
    </div>
  );
};
