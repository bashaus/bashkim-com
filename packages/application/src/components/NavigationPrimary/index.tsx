import { NavigationGroup } from "@bashkim-com/design-system";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

export const NavigationPrimary = () => {
  const { asPath } = useRouter();

  return (
    <NavigationGroup>
      <S.PortfolioNavigationItem isSelected={asPath.startsWith("/portfolio")}>
        <Link href="/portfolio">
          <a>
            <span>Portfolio</span>
          </a>
        </Link>
      </S.PortfolioNavigationItem>

      <S.AboutNavigationItem isSelected={asPath.startsWith("/about")}>
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </S.AboutNavigationItem>
    </NavigationGroup>
  );
};
