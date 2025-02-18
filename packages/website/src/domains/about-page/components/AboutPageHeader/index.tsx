import { PageHeaderPartial } from "@bashkim-com/design-system";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import PhotoImage from "../../../../assets/images/photo/photo@4x.jpg";
import HeaderDesktopImage from "../../assets/header-desktop.jpg";
import styles from "./styles.module.scss";

export default function AboutPageHeader() {
  return (
    <PageHeaderPartial
      id="AboutPage-Header"
      imageDesktop={HeaderDesktopImage.src}
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
