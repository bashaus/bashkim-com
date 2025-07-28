import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import profilePhoto from "@bashkim-com/design-system/ProfilePhoto";
import Typography from "@mui/material/Typography";

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
          src={profilePhoto.src}
          width={profilePhoto.width}
          height={profilePhoto.height}
          alt="Photo of Bashkim Isai"
        />
        <Typography variant="h2" component="h1">
          Bash
        </Typography>
      </S.AboutPageHeader>
    </PageHeaderPartial>
  );
}
