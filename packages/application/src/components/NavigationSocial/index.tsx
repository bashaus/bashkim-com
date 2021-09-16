import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";

import LogoGitHub from "%public/static/vectors/social/github.svg";
import LogoLinkedIn from "%public/static/vectors/social/linked-in.svg";
import LogoMedium from "%public/static/vectors/social/medium.svg";
import LogoStackOverflow from "%public/static/vectors/social/stack-overflow.svg";

import styles from "./styles.module.scss";

export const NavigationSocial = (): JSX.Element => (
  <NavigationGroup className={styles.NavigationSocial}>
    <NavigationItem className={styles.IconGitHub}>
      <a
        href="https://github.com/bashaus?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
        title="GitHub"
      >
        <LogoGitHub />
        <span>GitHub</span>
      </a>
    </NavigationItem>
    <NavigationItem className={styles.IconMedium}>
      <a
        href="https://medium.com/@bashaus"
        target="_blank"
        rel="noreferrer noopener"
        title="Medium"
      >
        <LogoMedium />
        <span>Medium</span>
      </a>
    </NavigationItem>
    <NavigationItem className={styles.IconStackOverflow}>
      <a
        href="https://stackoverflow.com/users/600240/bashaus"
        target="_blank"
        rel="noreferrer noopener"
        title="StackOverflow"
      >
        <LogoStackOverflow />
        <span>Stack Overflow</span>
      </a>
    </NavigationItem>
    <NavigationItem className={styles.IconLinkedIn}>
      <a
        href="https://www.linkedin.com/in/bashaus/"
        target="_blank"
        rel="noreferrer noopener"
        title="Linked In"
      >
        <LogoLinkedIn />
        <span>Linked In</span>
      </a>
    </NavigationItem>
  </NavigationGroup>
);
