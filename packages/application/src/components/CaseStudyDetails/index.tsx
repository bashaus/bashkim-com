import type { CaseStudyContentType } from "@bashkim-com/prismic";
import { FormattedRichText } from "@bashkim-com/design-system";

import { CaseStudyLifespan } from "%components/CaseStudyLifespan";

import styles from "./styles.module.scss";

export type CaseStudyDetailsProps = {
  caseStudy: CaseStudyContentType;
};

export const CaseStudyDetails = ({
  caseStudy,
}: CaseStudyDetailsProps): JSX.Element => {
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
    info_outcomes: outcomes,
  } = caseStudy;

  return (
    <div className={styles.CaseStudyDetails}>
      {brief && (
        <FormattedRichText>
          <h3>Brief</h3>
          <p>{brief}</p>
        </FormattedRichText>
      )}

      {strategy && (
        <FormattedRichText>
          <h3>Strategy</h3>
          <p>{strategy}</p>
        </FormattedRichText>
      )}

      {implementation && (
        <FormattedRichText>
          <h3>Implementation</h3>
          <p>{implementation}</p>
        </FormattedRichText>
      )}

      {deliverables && (
        <FormattedRichText>
          <h3>Deliverables</h3>
          <ul>
            {deliverables.map((deliverable) => (
              <li key={deliverable.info_deliverable_name}>
                {deliverable.info_deliverable_name}
              </li>
            ))}
          </ul>
        </FormattedRichText>
      )}

      {client && (
        <FormattedRichText>
          <h3>Client</h3>
          <p>{client}</p>
        </FormattedRichText>
      )}

      {agency && (
        <FormattedRichText>
          <h3>Agency</h3>
          <p>
            {agency}
            <br />
            {role}
          </p>
        </FormattedRichText>
      )}

      {institution && (
        <FormattedRichText>
          <h3>Institution</h3>
          <p>{institution}</p>
        </FormattedRichText>
      )}

      {degree && (
        <FormattedRichText>
          <h3>Degree</h3>
          <p>
            {degree}
            <br />
            {role}
          </p>
        </FormattedRichText>
      )}

      {markets && (
        <FormattedRichText>
          <h3>Markets</h3>
          <ul>
            {markets.map((market) => (
              <li key={market.info_market}>{market.info_market}</li>
            ))}
          </ul>
        </FormattedRichText>
      )}

      {targetAudiences && (
        <FormattedRichText>
          <h3>Audience</h3>
          <ol>
            {targetAudiences.map((audience) => (
              <li key={audience.info_target_audience_name}>
                {audience.info_target_audience_name}
              </li>
            ))}
          </ol>
        </FormattedRichText>
      )}

      {launchDate && (
        <FormattedRichText>
          <h3>Lifespan</h3>
          <p>
            <CaseStudyLifespan
              launched={launchDate}
              decommissioned={decommissionDate}
            />
          </p>
        </FormattedRichText>
      )}

      {outcomes.length > 0 && (
        <FormattedRichText>
          <h3>Outcomes</h3>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome.info_outcome}>{outcome.info_outcome}</li>
            ))}
          </ul>
        </FormattedRichText>
      )}
    </div>
  );
};
