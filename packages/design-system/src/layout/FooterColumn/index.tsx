import { ReactNode, useCallback, useState } from "react";

import styles from "./styles.module.scss";

export type FooterColumnProps = {
  children: ReactNode;
  className?: string;
  label: string;
};

export const FooterColumn = ({ label, children }: FooterColumnProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHeaderClick = useCallback((): void => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <div className={styles["FooterColumn"]} aria-expanded={isVisible}>
      <div
        className={styles["Label"]}
        onClick={handleHeaderClick}
        onKeyPress={handleHeaderClick}
        role="menuitem"
      >
        {label}
      </div>

      <div className={styles["Content"]}>{children}</div>
    </div>
  );
};
