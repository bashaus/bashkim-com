import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import PhotoImage from "@/assets/images/photo/photo@4x.jpg";
import HeaderDesktopImage from "@/domains/about-page/assets/header-desktop.jpg";

import styles from "./styles.module.scss";

export default function AboutPageHeader() {
  return (
    <PageHeaderPartial
      imageDesktop={HeaderDesktopImage.src}
      imageMobile={HeaderDesktopImage.src}
    >
      <div className={styles["AboutPageHeader"]}>
        <Image
          className={styles["HeaderImage"]}
          src={PhotoImage.src}
          alt="Photo of Bashkim Isai"
          width={PhotoImage.width}
          height={PhotoImage.height}
        />

        <Typography variant="h2" component="h1">
          Bash
        </Typography>
      </div>
    </PageHeaderPartial>
  );
}
