import {
  Footer as DSFooter,
  FooterColumn,
  FooterGroup,
  FooterLinks,
} from "@bashkim-com/design-system";
import Link from "next/link";

import { FooterCopyright } from "../FooterCopyright";

export const Footer = () => (
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
            <Link href="/portfolio">Case studies</Link>
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
            <Link href="/cookies">Cookie policy</Link>
          </li>
        </FooterLinks>
      </FooterColumn>
    </FooterGroup>
    <FooterCopyright />
  </DSFooter>
);
