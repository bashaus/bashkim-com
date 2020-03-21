import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function FooterColumn(props) {
  const { className, label, children } = props;
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={`${styles.FooterColumn} ${className} ${visible ? styles.visible : ''}`}>
      <div
        role="menuitem"
        tabIndex={0}
        className={styles.label}
        onClick={() => setVisible(!visible)}
        onKeyPress={() => setVisible(!visible)}
      >
        {label}
      </div>

      {children}
    </div>
  );
}

FooterColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

FooterColumn.defaultProps = {
  className: '',
};
