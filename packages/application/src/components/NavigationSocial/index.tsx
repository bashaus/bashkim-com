import classNames from "classnames";
import { useContext } from "react";

import { NavigationContext } from "%contexts/Navigation/context";

import LogoGitHub from "%public/static/vectors/social/github.svg";
import LogoLinkedIn from "%public/static/vectors/social/linked-in.svg";
import LogoStackOverflow from "%public/static/vectors/social/stack-overflow.svg";

import styles from "./styles.module.scss";

export const NavigationSocial = (): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);

  return (
    <nav
      data-heading="Social media"
      aria-label="Social media"
      className={classNames(styles.NavigationSocial, {
        [styles.isScrollAtTop]: navigationState.scrollAtTop,
      })}
    >
      <ul>
        <li className={styles.IconGitHub}>
          <a
            href="https://github.com/bashaus?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            title="GitHub"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
            >
              <LogoGitHub />
            </svg>
            <span>GitHub</span>
          </a>
        </li>
        <li className={styles.IconStackOverflow}>
          <a
            href="https://stackoverflow.com/users/600240/bashaus"
            target="_blank"
            rel="noreferrer noopener"
            title="StackOverflow"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
            >
              <LogoStackOverflow />
            </svg>
            <span>Stack Overflow</span>
          </a>
        </li>
        <li className={styles.IconLinkedIn}>
          <a
            href="https://www.linkedin.com/in/bashaus/"
            target="_blank"
            rel="noreferrer noopener"
            title="Linked In"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
            >
              <LogoLinkedIn />
            </svg>
            <span>Linked In</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
