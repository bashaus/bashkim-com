import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import * as S from "./styles";

export type TitlePartialProps = Readonly<{
  title: ReactNode;
  description: ReactNode;
  image?: ReactNode;
}>;

export default function TitlePartial({
  title,
  description,
  image,
}: TitlePartialProps) {
  return (
    <Container component="header">
      <Stack spacing={2} alignItems="center">
        {image && <S.Icon>{image}</S.Icon>}

        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Stack>
    </Container>
  );
}
