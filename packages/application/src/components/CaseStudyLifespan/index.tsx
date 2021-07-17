import { FormattedDate } from "%components/FormattedDate";
import { PrismicDate } from "%libraries/prismic/helpers/Date";

export type CaseStudyLifespanProps = {
  launched: string;
  decommissioned?: string;
};

export const CaseStudyLifespan = ({
  launched,
  decommissioned,
}: CaseStudyLifespanProps): JSX.Element => {
  const formattedLaunched = <FormattedDate date={PrismicDate(launched)} />;

  // If there is no decommissioned date, this is an on-going project
  if (!decommissioned) {
    return formattedLaunched;
  }

  // If launch/decommission date match, this was an event
  if (launched === decommissioned) {
    return formattedLaunched;
  }

  // There is a launch and decommission date
  const formattedDecommissioned = (
    <FormattedDate date={PrismicDate(decommissioned)} />
  );

  return (
    <>
      {`Launch: `}
      {formattedLaunched}
      <br />
      {`Retired: `}
      {formattedDecommissioned}
    </>
  );
};
