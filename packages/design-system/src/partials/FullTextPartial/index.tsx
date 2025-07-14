import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

export type FullTextPartialProps = Readonly<PropsWithChildren>;

export default function FullTextPartial({ children }: FullTextPartialProps) {
  return <Container maxWidth="md">{children}</Container>;
}
