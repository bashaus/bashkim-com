import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default class ToggleGroup extends React.PureComponent {
  constructor(...args) {
    super(...args);

    const { initialValue } = this.props;

    this.state = {
      selectedValue: initialValue,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    this.setState({ selectedValue: e.currentTarget.value });
    onChange(e);
  }

  render() {
    const { label, children } = this.props;
    const { selectedValue } = this.state;

    const buttons = React.Children.map(children, (child) => (
      React.cloneElement(child, {
        selected: selectedValue === child.props.value,
        onChange: this.handleChange,
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
  }
}

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
