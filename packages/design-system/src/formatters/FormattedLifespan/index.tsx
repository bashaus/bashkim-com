import { FormattedDate } from "../FormattedDate";

export type FormattedLifespanProps = {
  startDate: Date;
  endDate?: Date;
};

export const FormattedLifespan = ({
  startDate,
  endDate,
}: FormattedLifespanProps): JSX.Element => {
  const formattedStartDate = <FormattedDate date={startDate} />;

  // If there is no decommissioned date, this is an on-going project
  if (!endDate) {
    return formattedStartDate;
  }

  // If launch/decommission date match, this was an event
  if (startDate.toDateString() === endDate.toDateString()) {
    return formattedStartDate;
  }

  // There is a launch and decommission date
  const formattedEndDate = <FormattedDate date={endDate} />;

  return (
    <>
      {`Launched: `}
      {formattedStartDate}
      <br />
      {`Retired: `}
      {formattedEndDate}
    </>
  );
};
