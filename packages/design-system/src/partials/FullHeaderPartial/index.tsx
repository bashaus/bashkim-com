import Grid from "@mui/material/Grid";
import { PropsWithChildren, ReactNode } from "react";

import * as S from "./styles";

export type FullHeaderPartialProps = Readonly<
  PropsWithChildren<{
    background?: ReactNode;
  }>
>;

export default function FullHeaderPartial({
  background,
  children,
}: FullHeaderPartialProps) {
  return (
    <S.Wrapper>
      {!!background && <S.Background>{background}</S.Background>}

      <S.Content>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 9, lg: 6 }}>{children}</Grid>
        </Grid>
      </S.Content>
    </S.Wrapper>
  );
}
