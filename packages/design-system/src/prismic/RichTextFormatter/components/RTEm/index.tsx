import { ReactNode } from "react";

export type RTEmProps = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTEm({ children, key }: RTEmProps) {
  return <em key={key}>{children}</em>;
}
