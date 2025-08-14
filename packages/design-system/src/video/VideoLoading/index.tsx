import CircularProgress from "@mui/material/CircularProgress";

import * as S from "./styles";

export default function VideoLoading() {
  return (
    <S.Container>
      <CircularProgress aria-label="Loading video player" />
    </S.Container>
  );
}
