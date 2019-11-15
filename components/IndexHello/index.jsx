import React from 'react';
import Link from 'next/link';

import PartialHeaderText from '%components/PartialHeaderText';

import styles from './styles.scss';

export default function IndexHello() {
  return (
    <div className={`${styles.IndexHello}`}>
      <PartialHeaderText backgroundClassName={styles.background}>
        <div className={`${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={styles.text}>G&rsquo;day!</h1>
          </div>

          <p>
            <span className={styles.name}>
              <span> My name is</span>
              <Link href="/about">
                <a>Bash</a>
              </Link>
            </span>
            <span> </span>
            <span className={styles.spiel}>
              I&apos;m a London&#8209;based Creative Technologist specialising in
              <span> </span>
              <Link href="/portfolio#physical-computing">
                <a>tangible&nbsp;media</a>
              </Link>
              <span> and </span>
              <Link href="/portfolio#web-development">
                <a>web&nbsp;development</a>
              </Link>
              .
            </span>
          </p>
        </div>
      </PartialHeaderText>
    </div>
  );
}
