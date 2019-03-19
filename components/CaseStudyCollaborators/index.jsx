import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import CollaboratorSliceType from '%prismic/slice-types/Collaborator/component';

import styles from './styles.scss';

export default function CaseStudyCollaborators(props) {
  const { slices, peers, myRole } = props;

  return (
    <>
      <PartialSubtitle>
        <h2>Collaborators</h2>
      </PartialSubtitle>

      <ul className={styles.CaseStudyCollaborators}>
        <li>
          <strong>
            <a href="https://www.bashkim.com" target="_blank" rel="noopener noreferrer">
              Bashkim Isai
            </a>
          </strong>
          <br />
          { myRole }
        </li>

        { slices.map((slice, i) => {
          const { id: peerId } = slice.primary.CollaboratorSliceType_Peer;
          const peer = peers.find((p) => p.id === peerId);

          return (
            <CollaboratorSliceType
              key={i}
              peer={peer}
              slice={slice}
            />
          );
        }) }
      </ul>
    </>
  );
}

CaseStudyCollaborators.propTypes = {
  myRole: PropTypes.string.isRequired,
  peers: PropTypes.arrayOf(PropTypes.object).isRequired,
  slices: PropTypes.arrayOf(PropTypes.object).isRequired,
};
