import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavigationPrimary.module.scss";

export const NavigationPrimary = () => {
  const { asPath } = useRouter();

  return (
    <NavigationGroup>
      <NavigationItem
        className={styles["PortfolioNavigationItem"]}
        isSelected={asPath.startsWith("/portfolio")}
      >
        <Link href="/portfolio">
          <span>Portfolio</span>
        </Link>
      </NavigationItem>

      <NavigationItem
        className={styles["AboutNavigationItem"]}
        isSelected={asPath.startsWith("/about")}
      >
        <Link href="/about">
          <span>About</span>
        </Link>
      </NavigationItem>
    </NavigationGroup>
  );
};
