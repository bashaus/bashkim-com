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

export type DateFormatterProps = Readonly<{
  date: Date;
}>;

export default function DateFormatter({ date }: DateFormatterProps) {
  const d = `${date.getDate()}`.padStart(2, "0");
  const m = MONTH_NAMES[date.getMonth()];
  const y = date.getFullYear();

  return <span>{`${d} ${m} ${y}`}</span>;
}
