import Link from "next/link";

import { FooterColumn } from "%components/FooterColumn";

import styles from "./styles.module.scss";

export const FooterLinks = (): JSX.Element => (
  <div className={styles.FooterLinks}>
    <FooterColumn label="Articles">
      <ul>
        <li>
          <a
            href="https://medium.com/@bashaus"
            target="_blank"
            rel="noopener noreferrer"
          >
            On Medium
          </a>
        </li>
        <li>
          <a
            href="https://www.sitepoint.com/author/bashaus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            On Site Point
          </a>
        </li>
      </ul>
    </FooterColumn>

    <FooterColumn label="Portfolio">
      <ul>
        <li>
          <Link href="/portfolio">
            <a>Case studies</a>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/bashaus?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            On GitHub
          </a>
        </li>
      </ul>
    </FooterColumn>

    <FooterColumn label="Legal">
      <ul>
        <li>
          <Link href="/cookies">
            <a>Cookie Policy</a>
          </Link>
        </li>
      </ul>
    </FooterColumn>
  </div>
);
