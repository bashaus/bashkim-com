import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import * as S from "./styles";

export type TitlePartialProps = Readonly<{
  title: ReactNode;
  subtitle?: ReactNode;
  image?: ReactNode;
}>;

export default function TitlePartial({
  title,
  subtitle,
  image,
}: TitlePartialProps) {
  return (
    <Container component="header">
      <Stack spacing={2} alignItems="center">
        {image && <S.Icon>{image}</S.Icon>}

        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        {subtitle && <Typography>{subtitle}</Typography>}
      </Stack>
    </Container>
  );
}
