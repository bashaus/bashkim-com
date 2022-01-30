import { Reset } from "styled-reset";

import * as S from "./styles";

export const Normalize = () => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&amp;family=Roboto:wght@400;700&amp;display=swap"
    />
    <Reset />
    <S.Normalize />
  </>
);
