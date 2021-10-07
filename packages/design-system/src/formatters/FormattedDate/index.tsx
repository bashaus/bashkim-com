const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type FormattedDateProps = {
  date: Date;
};

export const FormattedDate = ({ date }: FormattedDateProps): JSX.Element => {
  const d = `${date.getDate()}`.padStart(2, "0");
  const m = MONTH_NAMES[date.getMonth()];
  const y = date.getFullYear();

  return <>{`${d} ${m} ${y}`}</>;
};
