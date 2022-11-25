import type { Case_Study, Technology } from "@bashkim-com/prismic-dal";

import * as S from "./CaseStudyTechnologies.styles";

export type CaseStudyTechnologiesProps = {
  caseStudy: Case_Study;
};

export const CaseStudyTechnologies = ({
  caseStudy,
}: CaseStudyTechnologiesProps) => (
  <>
    <S.Heading>Key technologies</S.Heading>

    <S.Technologies>
      {caseStudy.info_technologies.map((info_technology) => {
        if (!info_technology.info_technology) {
          return null;
        }

        const technology = info_technology.info_technology as Technology;
        const name = technology.technology_name;
        const icon = technology.technology_icon;

        return (
          <S.Technology key={name}>
            <S.TechnologyIcon src={icon.url} alt="" />
            <S.TechnologyName>{name}</S.TechnologyName>
          </S.Technology>
        );
      })}
    </S.Technologies>
  </>
);
