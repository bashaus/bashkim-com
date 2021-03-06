import React from "react";

import PartialSplit from "%partials/Split";
import PartialSubtitle from "%partials/Subtitle";

import styles from "./styles.module.scss";

const AboutProfile = (): JSX.Element => (
  <section className="group">
    <PartialSubtitle>
      <h2>Education</h2>
    </PartialSubtitle>

    <PartialSplit index={0}>
      <PartialSplit.Item>
        <div>
          <h3>Postgraduate</h3>
          <p>University of Queensland</p>
          <p>
            <time dateTime="2017">2017</time>
          </p>
          <p>
            Masters of
            <br />
            Interaction&nbsp;Design
          </p>
        </div>
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/education/uq/background.jpg">
        <div>
          <img
            alt=""
            src="/static/images/about/education/uq/logo.png"
            className={styles.logo}
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>

    <PartialSplit index={1}>
      <PartialSplit.Item>
        <div>
          <h3>Undergraduate</h3>
          <p>Queensland University of Technology</p>
          <p>
            <time dateTime="2005">2005</time>
            <span> to </span>
            <time dateTime="2009">2009</time>
          </p>
          <p>
            Bachelor of
            <br />
            Information&nbsp;Technology
          </p>
          <p>
            Majoring&nbsp;in
            <br />
            Web&nbsp;Services and&nbsp;Applications
          </p>
        </div>

        <div>
          <h3>Undergraduate</h3>
          <p>Queensland University of Technology</p>
          <p>
            <time dateTime="2005">2005</time>
            <span> to </span>
            <time dateTime="2009">2009</time>
          </p>
          <p>
            Bachelor of
            <br />
            Creative&nbsp;Industries
          </p>
          <p>
            Majoring&nbsp;in
            <br />
            Communication&nbsp;Design
          </p>
        </div>
      </PartialSplit.Item>

      <PartialSplit.Item backgroundImage="/static/images/about/education/qut/gardens-point.jpg">
        <div>
          <img
            alt=""
            src="/static/images/about/education/qut/logo.jpg"
            className={styles.logo}
          />
        </div>
      </PartialSplit.Item>
    </PartialSplit>
  </section>
);

export default AboutProfile;
