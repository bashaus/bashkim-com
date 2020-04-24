import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const ToggleButton = ({
  children, onChange, selected, value,
}) => (
  <label
    htmlFor={`ToggleButton-${value}`}
    className={`
      ${styles.ToggleButton}
      ${selected ? styles.selected : ''}
    `}
  >
    <input
      id={`ToggleButton-${value}`}
      type="radio"
      checked={selected}
      onChange={onChange}
      value={value}
    />
    {children}
  </label>
);

ToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

ToggleButton.defaultProps = {
  onChange: () => {},
  selected: false,
};

export default ToggleButton;
