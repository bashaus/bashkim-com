import { useSettings } from "../../contexts/Settings/Settings.context";

import * as S from "./GridLines.styles";

export const GridLines = () => {
  const { settingsState } = useSettings();
  const { isGridLinesVisible } = settingsState;

  if (!isGridLinesVisible) {
    return null;
  }

  return (
    <S.GridLines>
      <S.Container>
        {Array(12)
          .fill(" ")
          .map((_value, index) => (
            <S.Cell key={index} />
          ))}
      </S.Container>
    </S.GridLines>
  );
};
