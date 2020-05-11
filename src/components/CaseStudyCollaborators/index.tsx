import Link from "next/link";
import React from "react";

import PartialSubtitle from "%components/PartialSubtitle";

import CollaboratorSliceType from "%prismic/slice-types/Collaborator/component";

import styles from "./styles.module.scss";

interface CaseStudyCollaboratorsProps {
  myRole?: string;
  peers: Array<any>;
  slices: Array<any>;
}

const CaseStudyCollaborators = ({
  slices = [],
  peers = [],
  myRole,
}: CaseStudyCollaboratorsProps): JSX.Element | null => {
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
          {myRole}
        </li>

        {slices.map((slice, i) => {
          const { id: peerId } = slice.primary.CollaboratorSliceType_Peer;
          const peer = peers.find((p) => p.id === peerId);

          return <CollaboratorSliceType key={i} peer={peer} slice={slice} />;
        })}
      </ul>
    </>
  );
};

export default CaseStudyCollaborators;
