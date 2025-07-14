import styles from "./styles.module.scss";

export type HeaderLogoProps = Readonly<{
  animated?: boolean;
}>;

export default function HeaderLogo({ animated = false }: HeaderLogoProps) {
  return (
    <div className={styles["HeaderLogo"]}>
      <span className={styles["Command"]}>
        bash:<span className={styles["CommandPath"]}>~</span>$&nbsp;
      </span>
      {animated && <span className={styles["Typewriter"]} />}
      {!animated && <span>bashkim isai</span>}
    </div>
  );
}
