import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import styles from './styles.scss';

export default function CaseStudyCollaborators(props) {
  const { children } = props;

  return (
    <>
      <PartialSubtitle>
        <h2>Collaborators</h2>
      </PartialSubtitle>

      <ul className={styles.CaseStudyCollaborators}>
        {children}
      </ul>
    </>
  );
}

CaseStudyCollaborators.propTypes = {
  children: PropTypes.node.isRequired,
};
