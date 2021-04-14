import classNames from "classnames";
import { useCallback, useState } from "react";

import styles from "./styles.module.scss";

type FooterColumnProps = {
  children: React.ReactNode;
  className?: string;
  label: string;
};

const FooterColumn = ({
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
        className={styles.label}
        onClick={handleHeaderClick}
        onKeyPress={handleHeaderClick}
      >
        {label}
      </div>

      {children}
    </div>
  );
};

export default FooterColumn;
