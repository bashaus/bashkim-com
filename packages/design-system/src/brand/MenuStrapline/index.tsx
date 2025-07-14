import styles from "./styles.module.scss";

export type MenuStraplineProps = Readonly<{
  animated?: boolean;
}>;

export default function MenuStrapline({
  animated = false,
}: MenuStraplineProps) {
  return (
    <div className={styles["MenuStrapline"]}>
      <span className={styles["Command"]}>
        bash:<span className={styles["CommandPath"]}>~</span>$&nbsp;
      </span>
      {animated && <span className={styles["Typewriter"]} />}
      {!animated && <span>bashkim isai</span>}
    </div>
  );
}
