import {
  LifespanFormatter,
  RichTextFormatter,
} from "@bashkim-com/design-system";
import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";
import { PrismicDate } from "@bashkim-com/prismic-helpers";

import styles from "./styles.module.scss";

export type CaseStudyDetailsProps = {
  caseStudy: CaseStudyPageModelFragment;
};

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
    info_outcomes: outcomes,
  } = caseStudy;

  return (
    <div className={styles["CaseStudyDetails"]}>
      {brief && (
        <RichTextFormatter>
          <h3>Brief</h3>
          <p>{brief}</p>
        </RichTextFormatter>
      )}

      {strategy && (
        <RichTextFormatter>
          <h3>Strategy</h3>
          <p>{strategy}</p>
        </RichTextFormatter>
      )}

      {implementation && (
        <RichTextFormatter>
          <h3>Implementation</h3>
          <p>{implementation}</p>
        </RichTextFormatter>
      )}

      {deliverables && (
        <RichTextFormatter>
          <h3>Deliverables</h3>
          <ul>
            {deliverables.map((deliverable) => (
              <li key={deliverable.info_deliverable_name}>
                {deliverable.info_deliverable_name}
              </li>
            ))}
          </ul>
        </RichTextFormatter>
      )}

      {client && (
        <RichTextFormatter>
          <h3>Client</h3>
          <p>{client}</p>
        </RichTextFormatter>
      )}

      {agency && (
        <RichTextFormatter>
          <h3>Agency</h3>
          <p>
            {agency}
            <br />
            {role}
          </p>
        </RichTextFormatter>
      )}

      {institution && (
        <RichTextFormatter>
          <h3>Institution</h3>
          <p>{institution}</p>
        </RichTextFormatter>
      )}

      {degree && (
        <RichTextFormatter>
          <h3>Degree</h3>
          <p>
            {degree}
            <br />
            {role}
          </p>
        </RichTextFormatter>
      )}

      {markets && (
        <RichTextFormatter>
          <h3>Markets</h3>
          <ul>
            {markets.map((market) => (
              <li key={market.info_market}>{market.info_market}</li>
            ))}
          </ul>
        </RichTextFormatter>
      )}

      {targetAudiences && (
        <RichTextFormatter>
          <h3>Audience</h3>
          <ol>
            {targetAudiences.map((audience) => (
              <li key={audience.info_target_audience_name}>
                {audience.info_target_audience_name}
              </li>
            ))}
          </ol>
        </RichTextFormatter>
      )}

      {launchDate && (
        <RichTextFormatter>
          <h3>Lifespan</h3>
          <p>
            <LifespanFormatter
              startDate={PrismicDate(launchDate)}
              endDate={PrismicDate(decommissionDate)}
            />
          </p>
        </RichTextFormatter>
      )}

      {outcomes && outcomes.length > 0 && (
        <RichTextFormatter>
          <h3>Outcomes</h3>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome.info_outcome}>{outcome.info_outcome}</li>
            ))}
          </ul>
        </RichTextFormatter>
      )}
    </div>
  );
}
