import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";

export type FullTextPartialProps = Readonly<PropsWithChildren>;

export default function FullTextPartial({ children }: FullTextPartialProps) {
  return (
    <Container
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          maxWidth: 526,
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: 648,
        },
      })}
    >
      <RichTextFormatter>{children}</RichTextFormatter>
    </Container>
  );
}
