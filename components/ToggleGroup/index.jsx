import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const ToggleGroup = ({
  children, initialValue, label, onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (e) => {
    setSelectedValue(e.currentTarget.value);
    onChange(e);
  };

  const buttons = React.Children.map(children, (child) => (
    React.cloneElement(child, {
      selected: selectedValue === child.props.value,
      onChange: handleChange,
    })
  ));

  return (
    <>
      { label && (
        <p className={styles.label}>{label}</p>
      ) }

      <div className={styles.ToggleGroup}>
        {buttons}
      </div>
    </>
  );
};

ToggleGroup.propTypes = {
  label: PropTypes.node,
  initialValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

ToggleGroup.defaultProps = {
  label: null,
  onChange: () => {},
};

export default ToggleGroup;
