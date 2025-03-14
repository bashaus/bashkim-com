import { useSiteSettings } from "@/domains/site-settings/contexts/SiteSettings/context";

import * as S from "./styles";

export default function GridLines() {
  const { siteSettingsState: settingsState } = useSiteSettings();
  const { isGridLinesVisible } = settingsState;

  if (!isGridLinesVisible) {
    return null;
  }

  return (
    <S.GridLines>
      <S.GridContainer container spacing={2}>
        {Array(12)
          .fill("")
          .map((_value, i) => i + 1)
          .map((value) => (
            <S.GridCell size={{ xs: 1 }} key={value} />
          ))}
      </S.GridContainer>
    </S.GridLines>
  );
}
