import { useMemo } from "react";

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
  date: Date | string;
}>;

export default function DateFormatter({ date }: DateFormatterProps) {
  const dateObject = useMemo(
    () => (date instanceof Date ? date : new Date(date)),
    [date],
  );

  const d = `${dateObject.getDate()}`.padStart(2, "0");
  const m = MONTH_NAMES[dateObject.getMonth()];
  const y = dateObject.getFullYear();

  return <span>{`${d} ${m} ${y}`}</span>;
}
