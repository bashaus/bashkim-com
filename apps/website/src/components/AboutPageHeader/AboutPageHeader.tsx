import { PageHeaderPartial } from "@bashkim-com/design-system";

import HeaderDesktopImage from "../../assets/images/about/header-desktop.jpg";
import PhotoImage from "../../assets/images/about/profile/photo@4x.jpg";
import * as S from "./AboutPageHeader.styles";

export const AboutPageHeader = () => (
  <PageHeaderPartial
    id="AboutPage-Header"
    imageDesktop={HeaderDesktopImage.src}
  >
    <S.AboutPageHeader>
      <S.HeaderImage src={PhotoImage.src} />
      <S.HeaderText>Bash</S.HeaderText>
    </S.AboutPageHeader>
  </PageHeaderPartial>
);
