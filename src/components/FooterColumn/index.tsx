import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

interface FooterColumnProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

const FooterColumn = ({
  className,
  label,
  children,
}: FooterColumnProps): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleHeaderClick = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={classNames(className, {
        [styles.FooterColumn]: true,
        [styles.visible]: isVisible,
      })}
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
