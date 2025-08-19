import { ReactNode } from "react";

export type RTStrongProps = Readonly<{
  children: Array<ReactNode>;
  key: string;
}>;

export default function RTStrong({ children, key }: RTStrongProps) {
  return <strong key={key}>{children}</strong>;
}
