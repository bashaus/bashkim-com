import { ReactNode } from "react";

export type RTPreformattedProps = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTPreformatted({ children, key }: RTPreformattedProps) {
  return <pre key={key}>{children}</pre>;
}
