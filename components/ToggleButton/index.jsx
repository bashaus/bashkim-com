import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function ToggleButton(props) {
  const {
    children, onChange, selected, value,
  } = props;

  return (
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
}

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
