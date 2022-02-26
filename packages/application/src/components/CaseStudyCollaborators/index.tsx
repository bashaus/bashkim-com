import { CollaboratorSlice, SubtitlePartial } from "@bashkim-com/design-system";
import type { CollaboratorSliceType } from "@bashkim-com/prismic";
import Link from "next/link";

import * as S from "./styles";

export type CaseStudyCollaboratorsProps = {
  myRole?: string;
  slices: Array<CollaboratorSliceType>;
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
