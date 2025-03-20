import type {
  CaseStudyPageModelFragment,
  Technology,
} from "@bashkim-com/prismic-dal";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import * as S from "./styles";

export type CaseStudyTechnologiesProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyTechnologies({
  caseStudy,
}: CaseStudyTechnologiesProps) {
  if (!caseStudy.info_technologies) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Key technologies
      </Typography>

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
              <S.TechnologyIcon
                width={icon.dimensions.width}
                height={icon.dimensions.height}
                src={icon.url}
                alt={name ?? ""}
              />
              <S.TechnologyName>{name}</S.TechnologyName>
            </S.Technology>
          );
        })}
      </S.Technologies>
    </Container>
  );
}
