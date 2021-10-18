import Link from "next/link";

import {
  Footer as DSFooter,
  FooterGroup,
  FooterColumn,
  FooterLinks,
} from "@bashkim-com/design-system";

import { FooterCopyright } from "%components/FooterCopyright";

export const Footer = (): JSX.Element => (
  <DSFooter>
    <FooterGroup>
      <FooterColumn label="Articles">
        <FooterLinks>
          <li>
            <a
              href="https://medium.com/@bashaus"
              target="_blank"
              rel="noreferrer"
            >
              On Medium
            </a>
          </li>
          <li>
            <a
              href="https://www.sitepoint.com/author/bashaus/"
              target="_blank"
              rel="noreferrer"
            >
              On Site Point
            </a>
          </li>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn label="Portfolio">
        <FooterLinks>
          <li>
            <Link href="/portfolio">
              <a>Case studies</a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/bashaus?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              On GitHub
            </a>
          </li>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn label="Connect">
        <FooterLinks>
          <li>
            <a
              href="https://stackoverflow.com/users/600240/bashaus"
              target="_blank"
              rel="noreferrer"
            >
              Stack Overflow
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bashaus/"
              target="_blank"
              rel="noreferrer"
            >
              Linked In
            </a>
          </li>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn label="Legal">
        <FooterLinks>
          <li>
            <Link href="/cookies">
              <a>Cookie policy</a>
            </Link>
          </li>
        </FooterLinks>
      </FooterColumn>
    </FooterGroup>
    <FooterCopyright />
  </DSFooter>
);
