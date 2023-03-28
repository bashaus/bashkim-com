import { PageHeaderPartial } from "@bashkim-com/design-system";

import HeaderDesktopImage from "../../assets/header-desktop.jpg";
import PhotoImage from "../../assets/profile/photo@4x.jpg";
import styles from "./AboutPageHeader.module.scss";

export const AboutPageHeader = () => (
  <PageHeaderPartial
    id="AboutPage-Header"
    imageDesktop={HeaderDesktopImage.src}
  >
    <div className={styles["AboutPageHeader"]}>
      <img className={styles.HeaderImage} src={PhotoImage.src} />
      <h1>Bash</h1>
    </div>
  </PageHeaderPartial>
);
