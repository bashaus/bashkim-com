import classNames from "classnames";
import { ReactNode, useCallback, useState } from "react";

import styles from "./styles.module.scss";

export type FooterColumnProps = {
  children: ReactNode;
  className?: string;
  label: string;
};

export const FooterColumn = ({
  className,
  label,
  children,
}: FooterColumnProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHeaderClick = useCallback((): void => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <div
      aria-expanded={isVisible}
      className={classNames(className, styles.FooterColumn)}
    >
      <div
        role="menuitem"
        tabIndex={0}
        className={styles.Label}
        onClick={handleHeaderClick}
        onKeyPress={handleHeaderClick}
      >
        {label}
      </div>

      <div className={styles.Content}>{children}</div>
    </div>
  );
};
