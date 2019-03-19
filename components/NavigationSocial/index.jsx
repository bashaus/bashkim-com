import PropTypes from 'prop-types';
import React from 'react';

import LogoGitHub from '%public/static/vectors/social/github.svg';
import LogoLinkedIn from '%public/static/vectors/social/linkedin.svg';
import LogoStackOverflow from '%public/static/vectors/social/stackoverflow.svg';

import styles from './styles.scss';

export default function NavigationSocial(props) {
  const { headerIsIntersecting } = props;

  return (
    <nav
      data-heading="Social media"
      aria-label="Social media"
      className={`${styles.NavigationSocial} ${headerIsIntersecting ? styles.intersecting : ''}`}
    >
      <ul>
        <li className={styles.icon_GitHub}>
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
        <li className={styles.icon_StackOverflow}>
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
        <li className={styles.icon_LinkedIn}>
          <a
            href="https://www.linkedin.com/in/bashaus"
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
}

NavigationSocial.propTypes = {
  headerIsIntersecting: PropTypes.bool.isRequired,
};
