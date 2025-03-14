import { SplitItemPartial, SplitPartial } from "@bashkim-com/design-system";
import Button from "@mui/material/Button";

import PortfolioBackground from "@/domains/home-page/assets/portfolio-background.jpg";
import PracticeBackground from "@/domains/home-page/assets/practice-background.jpg";

import styles from "./styles.module.scss";

export default function HomeFooter() {
  return (
    <SplitPartial>
      <SplitItemPartial backgroundImage={PortfolioBackground.src}>
        <div className={styles["PortfolioSplitItemPartial"]}>
          <Button variant="outlined" color="currentColor" href="/portfolio">
            Browse portfolio
          </Button>
        </div>
      </SplitItemPartial>

      <SplitItemPartial backgroundImage={PracticeBackground.src}>
        <div>
          <Button variant="outlined" color="currentColor" href="/about">
            About me
          </Button>
        </div>
      </SplitItemPartial>
    </SplitPartial>
  );
}
