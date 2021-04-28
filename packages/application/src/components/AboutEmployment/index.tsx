import {
  Group,
  PartialSplit,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const AboutEmployment = (): JSX.Element => (
  <Group>
    <PartialSubtitle>
      <h2>Employment</h2>
    </PartialSubtitle>

    <PartialSplit index={0}>
      <PartialSplit.Item>
        <div>
          <h3>MMT Digital</h3>
          <p>London, United Kingdom</p>
          <p>
            <time dateTime="2019-04">April 2019</time>
            <span> to </span>
            <br />
            Current
          </p>
          <p>Senior Developer</p>
        </div>
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/employment/mmt/background.jpg">
        <div>
          <img
            alt=""
            className={styles.logo}
            src="/static/images/about/employment/mmt/logo.svg"
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>

    <PartialSplit index={1}>
      <PartialSplit.Item>
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
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/employment/trouva/background.jpg">
        <div>
          <img
            alt=""
            className={styles.logo}
            src="/static/images/about/employment/trouva/logo.jpg"
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>

    <PartialSplit index={2}>
      <PartialSplit.Item>
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
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/employment/ogilvy/background.jpg">
        <div>
          <img
            alt=""
            className={styles.logo}
            src="/static/images/about/employment/ogilvy/logo.png"
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>

    <PartialSplit index={3}>
      <PartialSplit.Item>
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
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/employment/agency-republic/background.jpg">
        <div>
          <img
            alt=""
            className={styles.logo}
            src="/static/images/about/employment/agency-republic/logo.jpg"
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>

    <PartialSplit index={4}>
      <PartialSplit.Item>
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
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/employment/studio-farrago/background2.jpg">
        <div>
          <img
            alt=""
            className={styles.logo}
            src="/static/images/about/employment/studio-farrago/logo.jpg"
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>
  </Group>
);
