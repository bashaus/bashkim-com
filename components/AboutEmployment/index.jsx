import React from 'react';

import PartialSplit from '%components/PartialSplit';
import PartialSplitItem from '%components/PartialSplitItem';
import PartialSubtitle from '%components/PartialSubtitle';

import styles from './styles.scss';

export default function AboutProfile() {
  return (
    <section className="group">
      <PartialSubtitle>
        <h2>Employment</h2>
      </PartialSubtitle>

      <PartialSplit index={0}>
        <PartialSplitItem>
          <div>
            <h3>Trouva</h3>
            <p>London, United Kingdom</p>
            <p>
              <time dateTime="2018-09">October 2018</time>
              <span> to </span>
              <br />
              <time dateTime="2019-02">February 2019</time>
            </p>
            <p>Senior Product&nbsp;Engineer</p>
          </div>
        </PartialSplitItem>

        <PartialSplitItem backgroundImage="/static/images/about/employment/trouva/background.jpg">
          <div>
            <img
              alt=""
              className={styles.logo}
              src="/static/images/about/employment/trouva/logo.jpg"
            />
          </div>
        </PartialSplitItem>
      </PartialSplit>

      <PartialSplit index={1}>
        <PartialSplitItem>
          <div>
            <h3>Hogarth & Ogilvy</h3>
            <p>London, United Kingdom</p>
            <p>
              <time dateTime="2016-09">September 2016</time>
              <span> to </span>
              <br />
              <time dateTime="2018-08">August 2018</time>
            </p>
            <p>Technical&nbsp;Lead</p>
          </div>

          <div>
            <h3>Ogilvy &amp; Mather</h3>
            <p>London, United Kingdom</p>
            <p>
              <time dateTime="2014-02">May 2014</time>
              <span> to </span>
              <br />
              <time dateTime="2016-09">August 2016</time>
            </p>
            <p>
              Senior Web Developer
              <br />
              Technical&nbsp;Consultant
            </p>
          </div>
        </PartialSplitItem>

        <PartialSplitItem backgroundImage="/static/images/about/employment/ogilvy/background.jpg">
          <div>
            <img
              alt=""
              className={styles.logo}
              src="/static/images/about/employment/ogilvy/logo.png"
            />
          </div>
        </PartialSplitItem>
      </PartialSplit>

      <PartialSplit index={2}>
        <PartialSplitItem>
          <div>
            <h3>Critical Mass</h3>
            <p>London, United Kingdom</p>
            <p>
              <time dateTime="2014-02">February 2014</time>
              <span> to </span>
              <br />
              <time dateTime="2014-05">May 2014</time>
            </p>
            <p>Senior&nbsp;Creative&nbsp;Technologist</p>
          </div>

          <div>
            <h3>Agency Republic</h3>
            <p>London, United Kingdom</p>
            <p>
              <time dateTime="2011-05">May 2011</time>
              <span> to </span>
              <br />
              <time dateTime="2013-01">May 2014</time>
            </p>
            <p>
              Creative Technologist
              <br />
              Senior&nbsp;Creative&nbsp;Technologist
            </p>
          </div>
        </PartialSplitItem>

        <PartialSplitItem backgroundImage="/static/images/about/employment/agency-republic/background.jpg">
          <div>
            <img
              alt=""
              className={styles.logo}
              src="/static/images/about/employment/agency-republic/logo.jpg"
            />
          </div>
        </PartialSplitItem>
      </PartialSplit>

      <PartialSplit index={3}>
        <PartialSplitItem>
          <div>
            <h3>Studio Farrago</h3>
            <p>Brisbane, Australia</p>
            <p>
              <time dateTime="2010-07">July 2010</time>
              <span> to </span>
              <br />
              <time dateTime="2011-05">May 2011</time>
            </p>
            <p>
              Company Director
              <br />
              Creative Technologist
              <br />
              Tangible Media Artist
            </p>
          </div>
        </PartialSplitItem>

        <PartialSplitItem backgroundImage="/static/images/about/employment/studio-farrago/background2.jpg">
          <div>
            <img
              alt=""
              className={styles.logo}
              src="/static/images/about/employment/studio-farrago/logo.jpg"
            />
          </div>
        </PartialSplitItem>
      </PartialSplit>
    </section>
  );
}
