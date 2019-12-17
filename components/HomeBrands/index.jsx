import Link from 'next/link';
import React from 'react';

import styles from './styles.scss';

export default function HomeBrands() {
  return (
    <section className="group">
      <ul className={styles.brands}>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/ihg-business-advantage">
            <a className={styles.brand_ihg}>IHG</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/vodafone-free-sim">
            <a className={styles.brand_vodafone}>Vodafone UK</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/battersea-looking-for-you">
            <a className={styles.brand_battersea}>Battersea Dogs &amp; Cats Home</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/huawei-run-impossible">
            <a className={styles.brand_huawei}>Huawei</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/chet-atkins-all-wah">
            <a className={styles.brand_converse}>Converse</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/[caseStudySlug]" as="/portfolio/jd-track-mat-dock">
            <a className={styles.brand_jack_daniels}>Jack Daniel&apos;s</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
