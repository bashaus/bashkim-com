import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import Typography from "@mui/material/Typography";

import PhotoImage from "@/assets/images/photo/photo@4x.jpg";
import HeaderDesktopImage from "@/domains/about-page/assets/header-desktop.jpg";

import * as S from "./styles";

export default function AboutPageHeader() {
  return (
    <PageHeaderPartial
      imageDesktop={HeaderDesktopImage.src}
      imageMobile={HeaderDesktopImage.src}
    >
      <S.AboutPageHeader>
        <S.HeaderImage {...PhotoImage} alt="Photo of Bashkim Isai" />
        <Typography variant="h2" component="h1">
          Bash
        </Typography>
      </S.AboutPageHeader>
    </PageHeaderPartial>
  );
}
