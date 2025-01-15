import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { CollaboratorSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Link from "next/link";

import styles from "./styles.module.scss";

export type CaseStudyCollaboratorsProps = Readonly<{
  myRole?: string;
  slices: Array<CollaboratorSliceTypeFragment>;
}>;

export default function CaseStudyCollaborators({
  slices = [],
  myRole,
}: CaseStudyCollaboratorsProps) {
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

        {slices.map((slice) => (
          <li
            className={styles["CaseStudyCollaborator"]}
            key={JSON.stringify(slice)}
          >
            <CollaboratorSlice slice={slice} />
          </li>
        ))}
      </ul>
    </>
  );
}
