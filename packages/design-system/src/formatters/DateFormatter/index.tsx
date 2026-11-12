import { useFormatter } from "next-intl";
import { useMemo } from "react";

export type DateFormatterProps = Readonly<{
  date: Date | string;
}>;

export default function DateFormatter({ date }: DateFormatterProps) {
  const format = useFormatter();
  const dateObject = useMemo(
    () => (date instanceof Date ? date : new Date(date)),
    [date],
  );

  return (
    <time dateTime={dateObject.toISOString()}>
      {format.dateTime(dateObject, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </time>
  );
}
