import { NavigationGroup, NavigationItem } from "@bashkim-com/design-system";

import GitHubVector from "../../assets/vectors/social/github.svg";
import LinkedInVector from "../../assets/vectors/social/linked-in.svg";
import MediumVector from "../../assets/vectors/social/medium.svg";
import StackOverflowVector from "../../assets/vectors/social/stack-overflow.svg";
import styles from "./NavigationSocial.module.scss";

export const NavigationSocial = () => (
  <NavigationGroup className={styles["NavigationSocial"]}>
    <NavigationItem className={styles["IconGitHub"]}>
      <a
        href="https://github.com/bashaus?tab=repositories"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <GitHubVector />
        <span>GitHub</span>
      </a>
    </NavigationItem>

    <NavigationItem className={styles["IconMedium"]}>
      <a
        href="https://medium.com/@bashaus"
        target="_blank"
        rel="noreferrer"
        title="Medium"
      >
        <MediumVector />
        <span>Medium</span>
      </a>
    </NavigationItem>

    <NavigationItem className={styles["IconStackOverflow"]}>
      <a
        href="https://stackoverflow.com/users/600240/bashaus"
        target="_blank"
        rel="noreferrer"
        title="StackOverflow"
      >
        <StackOverflowVector />
        <span>Stack Overflow</span>
      </a>
    </NavigationItem>

    <NavigationItem className={styles["IconLinkedIn"]}>
      <a
        href="https://www.linkedin.com/in/bashaus/"
        target="_blank"
        rel="noreferrer"
        title="Linked In"
      >
        <LinkedInVector />
        <span>Linked In</span>
      </a>
    </NavigationItem>
  </NavigationGroup>
);
