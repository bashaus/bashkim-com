import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import * as S from "./styles";

export type CaseStudyOutcomessProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyOutcomes({
  caseStudy,
}: CaseStudyOutcomessProps) {
  const { info_outcomes: outcomes } = caseStudy;

  if (outcomes?.length === 0) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Outcomes
      </Typography>

      <S.Outcomes>
        {outcomes?.map((outcome) => (
          <S.Outcome key={outcome.info_outcome}>
            <ListItem alignItems="flex-start" disableGutters>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText>{outcome.info_outcome}</ListItemText>
            </ListItem>
          </S.Outcome>
        ))}
      </S.Outcomes>
    </Container>
  );
}
