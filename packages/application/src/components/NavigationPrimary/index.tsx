import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export const NavigationPrimary = (): JSX.Element => {
  const router = useRouter();

  return (
    <NavigationGroup className={styles.NavigationPrimary}>
      <NavigationItem
        className={styles.Portfolio}
        isSelected={router.asPath.startsWith("/portfolio")}
      >
        <Link href="/portfolio">
          <a>
            <span>Portfolio</span>
          </a>
        </Link>
      </NavigationItem>
      <NavigationItem
        className={styles.About}
        isSelected={router.asPath.startsWith("/about")}
      >
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </NavigationItem>
    </NavigationGroup>
  );
};
