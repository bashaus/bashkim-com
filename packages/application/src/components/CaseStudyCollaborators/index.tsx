import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { Case_StudyCollaboratorsCollaboratorslicetype } from "@bashkim-com/prismic-types";
import Link from "next/link";

import * as S from "./styles";

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

      <S.CaseStudyCollaborators>
        <S.CaseStudyCollaborator>
          <strong>
            <Link href="/">
              <a>Bashkim Isai</a>
            </Link>
          </strong>
          <br />
          {myRole}
        </S.CaseStudyCollaborator>

        {slices.map((slice, i) => (
          <S.CaseStudyCollaborator key={i}>
            <CollaboratorSlice slice={slice} />
          </S.CaseStudyCollaborator>
        ))}
      </S.CaseStudyCollaborators>
    </>
  );
};
