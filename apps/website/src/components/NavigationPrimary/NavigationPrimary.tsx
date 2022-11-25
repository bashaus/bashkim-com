import { NavigationGroup } from "@bashkim-com/design-system";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./NavigationPrimary.styles";

export const NavigationPrimary = () => {
  const { asPath } = useRouter();

  return (
    <NavigationGroup>
      <S.PortfolioNavigationItem isSelected={asPath.startsWith("/portfolio")}>
        <Link href="/portfolio">
          <span>Portfolio</span>
        </Link>
      </S.PortfolioNavigationItem>

      <S.AboutNavigationItem isSelected={asPath.startsWith("/about")}>
        <Link href="/about">
          <span>About</span>
        </Link>
      </S.AboutNavigationItem>
    </NavigationGroup>
  );
};
