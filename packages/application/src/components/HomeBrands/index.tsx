import Link from "next/link";

import { Group } from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const HomeBrands = (): JSX.Element => (
  <Group>
    <ul className={styles.Brands}>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/ihg-business-advantage"
          passHref
        >
          <a className={styles.BrandIHG}>IHG</a>
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/vodafone-free-sim"
          passHref
        >
          <a className={styles.BrandVodafone}>Vodafone UK</a>
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/battersea-looking-for-you"
          passHref
        >
          <a className={styles.BrandBattersea}>
            Battersea Dogs &amp; Cats Home
          </a>
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/huawei-run-impossible"
          passHref
        >
          <a className={styles.BrandHuawei}>Huawei</a>
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/chet-atkins-all-wah"
          passHref
        >
          <a className={styles.BrandConverse}>Converse</a>
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio/[caseStudySlug]"
          as="/portfolio/jd-track-mat-dock"
          passHref
        >
          <a className={styles.BrandJackDaniels}>Jack Daniel&apos;s</a>
        </Link>
      </li>
    </ul>
  </Group>
);
