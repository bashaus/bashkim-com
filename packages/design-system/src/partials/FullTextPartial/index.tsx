import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";

export type FullTextPartialProps = Readonly<PropsWithChildren>;

export default function FullTextPartial({ children }: FullTextPartialProps) {
  return (
    <Container maxWidth="md">
      <RichTextFormatter>{children}</RichTextFormatter>
    </Container>
  );
}
