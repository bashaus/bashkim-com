import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

export type FullImagePartialProps = Readonly<PropsWithChildren>;

export default function FullImagePartial({ children }: FullImagePartialProps) {
  return <Container>{children}</Container>;
}
