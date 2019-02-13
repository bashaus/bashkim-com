import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from 'components/PartialSubtitle';

import styles from './styles.scss';

export default function CaseStudyCollaborators(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <PartialSubtitle>
        <h2>Collaborators</h2>
      </PartialSubtitle>

      <ul className={styles.CaseStudyCollaborators}>
        {children}
      </ul>
    </React.Fragment>
  );
}

CaseStudyCollaborators.propTypes = {
  children: PropTypes.node.isRequired,
};
