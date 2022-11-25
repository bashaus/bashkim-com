import {
  CallToAction,
  SplitItemPartial,
  SplitPartial,
} from "@bashkim-com/design-system";
import Link from "next/link";

import PortfolioBackground from "../../assets/images/home/portfolio-background.jpg";
import PracticeBackground from "../../assets/images/home/practice-background.jpg";

import * as S from "./HomeFooter.styles";

export const HomeFooter = () => (
  <SplitPartial>
    <SplitItemPartial backgroundImage={PortfolioBackground.src}>
      <S.PortfolioSplitItemPartial>
        <h3>Looking for more case&nbsp;studies?</h3>
        <CallToAction>
          <Link href="/portfolio">
            <span>Browse portfolio</span>
          </Link>
        </CallToAction>
      </S.PortfolioSplitItemPartial>
    </SplitItemPartial>

    <SplitItemPartial backgroundImage={PracticeBackground.src}>
      <div>
        <h3>Want more details about my practice?</h3>
        <CallToAction>
          <Link href="/about">
            <span>About me</span>
          </Link>
        </CallToAction>
      </div>
    </SplitItemPartial>
  </SplitPartial>
);
