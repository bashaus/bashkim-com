import {
  Group,
  GroupDesign,
  PageHeaderPartial,
  SubtitlePartial,
  TitlePartial,
} from "@bashkim-com/design-system";
import type { CaseStudyContentType } from "@bashkim-com/prismic";

import { CaseStudyDetails } from "%components/CaseStudyDetails";
import { CaseStudyTechnologies } from "%components/CaseStudyTechnologies";

import * as S from "./styles";

export type CaseStudyHeaderProps = {
  caseStudy: CaseStudyContentType;
};

export const CaseStudyHeader = ({ caseStudy }: CaseStudyHeaderProps) => (
  <>
    <PageHeaderPartial
      id="CaseStudyPage-Header"
      imageDesktop={caseStudy.image_header_desktop?.url}
      imageMobile={caseStudy.image_header_mobile?.url}
    />

    <Group>
      <TitlePartial image={caseStudy.image_icon.url}>
        <h1>{caseStudy.meta_title}</h1>
        <p>{caseStudy.meta_description}</p>
      </TitlePartial>
    </Group>

    <Group design={GroupDesign.ALTERNATE}>
      <SubtitlePartial>
        <h2>Project details</h2>
      </SubtitlePartial>

      <S.CaseStudyHeader>
        <S.CaseStudyDetails>
          <CaseStudyDetails caseStudy={caseStudy} />
        </S.CaseStudyDetails>
        <S.CaseStudyTechnologies>
          <CaseStudyTechnologies caseStudy={caseStudy} />
        </S.CaseStudyTechnologies>
      </S.CaseStudyHeader>
    </Group>
  </>
);
