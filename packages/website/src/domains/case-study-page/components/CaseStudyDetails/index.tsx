import LifespanFormatter from "@bashkim-com/design-system/LifespanFormatter";
import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import * as S from "./styles";

export type CaseStudyDetailsProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyDetails({ caseStudy }: CaseStudyDetailsProps) {
  const {
    info_brief: brief,
    info_strategy: strategy,
    info_implementation: implementation,
    info_deliverables: deliverables,
    info_client: client,
    info_agency: agency,
    info_role: role,
    info_institution: institution,
    info_degree: degree,
    info_markets: markets,
    info_target_audiences: targetAudiences,
    info_launch_date: launchDate,
    info_decommission_date: decommissionDate,
  } = caseStudy;

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Project details
      </Typography>

      <S.Details>
        {brief && (
          <S.Detail>
            <S.DetailTitle>Brief</S.DetailTitle>
            <S.DetailText>{brief}</S.DetailText>
          </S.Detail>
        )}

        {strategy && (
          <S.Detail>
            <S.DetailTitle>Strategy</S.DetailTitle>
            <S.DetailText>{strategy}</S.DetailText>
          </S.Detail>
        )}

        {implementation && (
          <S.Detail>
            <S.DetailTitle>Implementation</S.DetailTitle>
            <S.DetailText>{implementation}</S.DetailText>
          </S.Detail>
        )}

        {deliverables && (
          <S.Detail>
            <S.DetailTitle>Deliverables</S.DetailTitle>

            <ul>
              {deliverables.map((deliverable) => (
                <li key={deliverable.info_deliverable_name}>
                  {deliverable.info_deliverable_name}
                </li>
              ))}
            </ul>
          </S.Detail>
        )}

        {client && (
          <S.Detail>
            <S.DetailTitle>Client</S.DetailTitle>
            <S.DetailText>{client}</S.DetailText>
          </S.Detail>
        )}

        {agency && (
          <S.Detail>
            <S.DetailTitle>Agency</S.DetailTitle>
            <S.DetailText>
              {agency}
              <br />
              {role}
            </S.DetailText>
          </S.Detail>
        )}

        {institution && (
          <S.Detail>
            <S.DetailTitle>Institution</S.DetailTitle>
            <S.DetailText>{institution}</S.DetailText>
          </S.Detail>
        )}

        {degree && (
          <S.Detail>
            <S.DetailTitle>Degree</S.DetailTitle>
            <S.DetailText>
              {degree}
              <br />
              {role}
            </S.DetailText>
          </S.Detail>
        )}

        {markets && (
          <S.Detail>
            <S.DetailTitle>Markets</S.DetailTitle>

            <ul>
              {markets.map((market) => (
                <li key={market.info_market}>{market.info_market}</li>
              ))}
            </ul>
          </S.Detail>
        )}

        {targetAudiences && (
          <S.Detail>
            <S.DetailTitle>Audience</S.DetailTitle>

            <ol>
              {targetAudiences.map((audience) => (
                <li key={audience.info_target_audience_name}>
                  {audience.info_target_audience_name}
                </li>
              ))}
            </ol>
          </S.Detail>
        )}

        {launchDate && (
          <S.Detail>
            <S.DetailTitle>Lifespan</S.DetailTitle>
            <S.DetailText>
              <LifespanFormatter
                startDate={PrismicDate(launchDate)}
                endDate={PrismicDate(decommissionDate)}
              />
            </S.DetailText>
          </S.Detail>
        )}
      </S.Details>
    </Container>
  );
}
