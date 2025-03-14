import { Group, SubtitlePartial } from "@bashkim-com/design-system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import EthicallyVector from "@/domains/about-page/assets/principles/ethically.svg";
import MaintainableVector from "@/domains/about-page/assets/principles/maintainable.svg";
import OnTimeVector from "@/domains/about-page/assets/principles/on-time.svg";
import RobustVector from "@/domains/about-page/assets/principles/robust.svg";
import SecurelyVector from "@/domains/about-page/assets/principles/securely.svg";
import ToSatisfactionVector from "@/domains/about-page/assets/principles/to-satisfaction.svg";
import ToSpecificationVector from "@/domains/about-page/assets/principles/to-specification.svg";
import WithinBudgetVector from "@/domains/about-page/assets/principles/within-budget.svg";

import * as S from "./styles";

export default function AboutPrinciples() {
  return (
    <Group>
      <SubtitlePartial>
        <h2>Core principles</h2>
      </SubtitlePartial>

      <Container>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <S.Principle>
            <S.Icon>
              <OnTimeVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              On-time
            </Typography>

            <Typography>
              Committed to delivering a resolved product to an
              agreed&nbsp;schedule
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <WithinBudgetVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              Within budget
            </Typography>

            <Typography>
              Because all financial investments are a risk, there needs to be a
              responsibility to&nbsp;deliver
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <ToSpecificationVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              To specification
            </Typography>

            <Typography>
              Producing exactly what everyone agrees to the highest
              possible&nbsp;standards
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <ToSatisfactionVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              To satisfaction
            </Typography>

            <Typography>
              Software is designed for people, so let&apos;s put a&nbsp;smile on
              our client&apos;s customers&apos;&nbsp;faces
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <MaintainableVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              Maintainable
            </Typography>

            <Typography>
              Everyone who works on the project also has to fall in love with
              the code&nbsp;too
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <SecurelyVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              Securely
            </Typography>

            <Typography>
              No client wants media attention for the wrong reasons, especially
              because of your&nbsp;work
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <EthicallyVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              Ethically
            </Typography>

            <Typography>
              Projects must increase the quality of life for
              all&nbsp;stakeholders
            </Typography>
          </S.Principle>

          <S.Principle>
            <S.Icon>
              <RobustVector />
            </S.Icon>

            <Typography variant="h6" gutterBottom>
              Robust
            </Typography>

            <Typography>
              Responsible testing methodologies accompanied with continuous
              integration and automated&nbsp;deployment
            </Typography>
          </S.Principle>
        </Grid>
      </Container>
    </Group>
  );
}
