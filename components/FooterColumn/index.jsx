import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const FooterColumn = ({ className, label, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleHeaderClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${styles.FooterColumn} ${className} ${isVisible ? styles.visible : ''}`}>
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

FooterColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

FooterColumn.defaultProps = {
  className: '',
};

export default FooterColumn;
