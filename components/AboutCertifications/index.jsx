import React from 'react';

import PartialSplit from '%components/PartialSplit';
import PartialSplitItem from '%components/PartialSplitItem';
import PartialSubtitle from '%components/PartialSubtitle';

import styles from './styles.scss';

export default function AboutProfile() {
  return (
    <section className="group">
      <PartialSubtitle>
        <h2>Certifications</h2>
      </PartialSubtitle>

      <PartialSplit index={1}>
        <PartialSplitItem>
          <div>
            <h3>Java 8</h3>
            <p>
              Oracle Certified Associate
              <br />
              <time dateTime="2012-08-23">April 2016</time>
            </p>
            <p>
              <img
                alt="Oracle Certified Associate"
                src="/static/images/about/certifications/java/oca.png"
              />
            </p>
          </div>
        </PartialSplitItem>
        <PartialSplitItem backgroundImage="/static/images/about/certifications/java/background.jpg">
          <img
            alt="Duke - The Java Mascot"
            src="/static/images/about/certifications/java/logo.jpg"
            className={styles.logo}
          />
        </PartialSplitItem>
      </PartialSplit>

      <PartialSplit index={2}>
        <PartialSplitItem>
          <div>
            <h3>PHP 5.3</h3>
            <p>
              Zend Certified Engineer
              <br />
              <time dateTime="2012-08-23">August 2012</time>
            </p>
            <p>
              <a
                href="https://www.zend.com/en/yellow-pages/ZEND020625"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Zend Certified Engineer"
                  src="/static/images/about/certifications/php/zce.jpg"
                />
              </a>
            </p>
          </div>
        </PartialSplitItem>

        <PartialSplitItem backgroundImage="/static/images/about/certifications/php/background.jpg">
          <img
            alt="ElePHPant"
            className={styles.logo}
            src="/static/images/about/certifications/php/logo.png"
          />
        </PartialSplitItem>
      </PartialSplit>
    </section>
  );
}
