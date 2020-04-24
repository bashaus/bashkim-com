import dayjs from 'dayjs';
import React from 'react';

interface CaseStudyLifespanProps {
  launched?: string;
  decommissioned?: string;
}

const CaseStudyLifespan = ({
  launched,
  decommissioned,
}: CaseStudyLifespanProps): JSX.Element => {
  const formattedLaunched = dayjs(launched).format('DD MMMM YYYY');

  // If there is no decommissioned date, this is an on-going project
  if (decommissioned === null) {
    return <>{formattedLaunched}</>;
  }

  // If launch/decommission date match, this was an event
  if (launched === decommissioned) {
    return <>{formattedLaunched}</>;
  }

  // There is a launch and decommission date
  const formattedDecommissioned = dayjs(decommissioned).format('DD MMMM YYYY');

  return (
    <>
      {`Launch: ${formattedLaunched}`}
      <br />
      {`Retired: ${formattedDecommissioned}`}
    </>
  );
};

export default CaseStudyLifespan;
