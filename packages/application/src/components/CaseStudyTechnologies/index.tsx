import type { CaseStudyContentType } from "@bashkim-com/prismic";

import * as S from "./styles";

export type CaseStudyTechnologiesProps = {
  caseStudy: CaseStudyContentType;
};

export const CaseStudyTechnologies = ({
  caseStudy,
}: CaseStudyTechnologiesProps): JSX.Element => (
  <>
    <S.Heading>Key technologies</S.Heading>

    <S.Technologies>
      {caseStudy.info_technologies.map((technology) => {
        if (!technology.info_technology) {
          return null;
        }

        const { technology_name: name, technology_icon: icon } =
          technology.info_technology;

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
