import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import Typography from "@mui/material/Typography";

import photoImage from "@/assets/images/photo/photo@4x.jpg";
import headerDesktopImage from "@/domains/about-page/assets/header-desktop.jpg";

import * as S from "./styles";

export default function AboutPageHeader() {
  return (
    <PageHeaderPartial
      imageDesktop={headerDesktopImage.src}
      imageMobile={headerDesktopImage.src}
    >
      <S.AboutPageHeader>
        <S.HeaderImage
          src={photoImage.src}
          width={photoImage.width}
          height={photoImage.height}
          alt="Photo of Bashkim Isai"
        />
        <Typography variant="h2" component="h1">
          Bash
        </Typography>
      </S.AboutPageHeader>
    </PageHeaderPartial>
  );
}
