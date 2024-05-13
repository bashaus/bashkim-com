import { useSettings } from "../../contexts/Settings/context";
import styles from "./styles.module.scss";

export const GridLines = () => {
  const { settingsState } = useSettings();
  const { isGridLinesVisible } = settingsState;

  if (!isGridLinesVisible) {
    return null;
  }

  return (
    <div className={styles["GridLines"]}>
      <div className={styles["Container"]}>
        {Array(12)
          .fill("")
          .map((_value, i) => i + 1)
          .map((value) => (
            <div className={styles["Cell"]} key={value} />
          ))}
      </div>
    </div>
  );
};
