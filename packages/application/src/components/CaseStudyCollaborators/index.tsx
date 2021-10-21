import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { CollaboratorSliceType } from "@bashkim-com/prismic";
import Link from "next/link";

import styles from "./styles.module.scss";

export type CaseStudyCollaboratorsProps = {
  myRole?: string;
  slices: Array<CollaboratorSliceType>;
};

export const CaseStudyCollaborators = ({
  slices = [],
  myRole,
}: CaseStudyCollaboratorsProps): JSX.Element | null => {
  if (!slices.length) {
    return null;
  }

  return (
    <>
      <SubtitlePartial>
        <h2>Collaborators</h2>
      </SubtitlePartial>

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

        {slices.map((slice, i) => (
          <CollaboratorSlice key={i} slice={slice} />
        ))}
      </ul>
    </>
  );
};
