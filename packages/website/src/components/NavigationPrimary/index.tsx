import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

export default function NavigationPrimary() {
  const pathname = usePathname();

  return (
    <NavigationGroup>
      <NavigationItem
        className={styles["PortfolioNavigationItem"]}
        isSelected={pathname?.startsWith("/portfolio")}
      >
        <Link href="/portfolio">
          <span>Portfolio</span>
        </Link>
      </NavigationItem>

      <NavigationItem
        className={styles["AboutNavigationItem"]}
        isSelected={pathname?.startsWith("/about")}
      >
        <Link href="/about">
          <span>About</span>
        </Link>
      </NavigationItem>
    </NavigationGroup>
  );
}
