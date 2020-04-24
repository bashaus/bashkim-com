import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import PartialSubtitle from '%components/PartialSubtitle';

import CollaboratorSliceType from '%prismic/slice-types/Collaborator/component';

import styles from './styles.module.scss';

const CaseStudyCollaborators = ({ slices = [], peers = [], myRole = null }) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <PartialSubtitle>
        <h2>Collaborators</h2>
      </PartialSubtitle>

      <ul className={styles.CaseStudyCollaborators}>
        <li>
          <strong>
            <Link href="/">
              <a>Bashkim Isai</a>
            </Link>
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
};

CaseStudyCollaborators.propTypes = {
  myRole: PropTypes.string.isRequired,
  peers: PropTypes.arrayOf(PropTypes.object).isRequired,
  slices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CaseStudyCollaborators;
