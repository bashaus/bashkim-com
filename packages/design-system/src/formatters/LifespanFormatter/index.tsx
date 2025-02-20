import DateFormatter from "../DateFormatter";

export type LifespanFormatterProps = Readonly<{
  startDate: Date;
  endDate?: Date;
}>;

export default function LifespanFormatter({
  startDate,
  endDate,
}: LifespanFormatterProps) {
  const formattedStartDate = <DateFormatter date={startDate} />;

  // If there is no decommissioned date, this is an on-going project
  if (!endDate) {
    return formattedStartDate;
  }

  // If launch/decommission date match, this was an event
  if (startDate.toDateString() === endDate.toDateString()) {
    return formattedStartDate;
  }

  // There is a launch and decommission date
  const formattedEndDate = <DateFormatter date={endDate} />;

  return (
    <>
      {`Launched: `}
      {formattedStartDate}
      <br />
      {`Retired: `}
      {formattedEndDate}
    </>
  );
}
