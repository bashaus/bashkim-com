import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function CaseStudyDetails(props) {
  const { children } = props;

  return (
    <div className={styles.CaseStudyDetails}>
      {children}
    </div>
  );
}

CaseStudyDetails.propTypes = {
  children: PropTypes.node.isRequired,
};
