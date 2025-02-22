import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";

export type SubtitlePartialProps = Readonly<
  PropsWithChildren<{
    id?: string;
  }>
>;

export default function SubtitlePartial({
  id,
  children,
}: SubtitlePartialProps) {
  return (
    <Container id={id}>
      <RichTextFormatter>{children}</RichTextFormatter>
    </Container>
  );
}
