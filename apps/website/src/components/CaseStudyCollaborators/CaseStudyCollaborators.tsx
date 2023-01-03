import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { Case_StudyCollaboratorsCollaboratorslicetype } from "@bashkim-com/prismic-dal";
import Link from "next/link";

import styles from "./CaseStudyCollaborators.module.scss";

export type CaseStudyCollaboratorsProps = {
  myRole?: string;
  slices: Array<Case_StudyCollaboratorsCollaboratorslicetype>;
};

export const CaseStudyCollaborators = ({
  slices = [],
  myRole,
}: CaseStudyCollaboratorsProps) => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Collaborators</h2>
      </SubtitlePartial>

      <ul className={styles["CaseStudyCollaborators"]}>
        <li className={styles["CaseStudyCollaborator"]}>
          <strong>
            <Link href="/">Bashkim Isai</Link>
          </strong>
          <br />
          {myRole}
        </li>

        {slices.map((slice, i) => (
          <li className={styles["CaseStudyCollaborator"]} key={i}>
            <CollaboratorSlice slice={slice} />
          </li>
        ))}
      </ul>
    </>
  );
};
