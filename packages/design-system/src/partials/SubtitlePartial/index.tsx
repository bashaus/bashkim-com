import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { isValidElement, ReactNode } from "react";

export type SubtitlePartialProps = Readonly<{
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}>;

export default function SubtitlePartial({
  id,
  title,
  subtitle,
}: SubtitlePartialProps) {
  return (
    <Container id={id}>
      {isValidElement(title) ? (
        <>{title}</>
      ) : (
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
      )}

      {isValidElement(subtitle) ? (
        <>{subtitle}</>
      ) : (
        <Typography gutterBottom>{subtitle}</Typography>
      )}
    </Container>
  );
}
