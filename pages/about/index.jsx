import React from 'react';

import AboutProfile from 'components/AboutProfile';
import AboutEmployment from 'components/AboutEmployment';
import AboutTutoring from 'components/AboutTutoring';
import AboutEducation from 'components/AboutEducation';
import AboutCertifications from 'components/AboutCertifications';
import LayoutDefault from 'components/LayoutDefault';
import MenuHomeBackButtonImpl from 'components/MenuBackButtonHomeImpl';
import MetaDescription from 'components/MetaDescription';
import MetaKeywords from 'components/MetaKeywords';
import MetaTitle from 'components/MetaTitle';
import PartialHeaderImage from 'components/PartialHeaderImage';
import PartialSubtitle from 'components/PartialSubtitle';

import styles from './styles.scss';

export default function AboutPage() {
  return (
    <LayoutDefault theme="about" backButton={MenuHomeBackButtonImpl}>
      <MetaTitle content="About" />
      <MetaDescription content="Information on the work history of Bashkim Isai" />
      <MetaKeywords content="bashkim isai, creative technologist, london" />

      <PartialHeaderImage id="AboutPage-Header" className={styles.header} />
      <AboutProfile />
      <AboutEmployment />
      <AboutTutoring />
      <AboutEducation />
      <AboutCertifications />

      <div className="layout-split">
        <PartialSubtitle>
          <h2>Looking for more?</h2>
        </PartialSubtitle>

        <div className="layout-split--text">
          <div className="layout-cta">
            <p>Looking for recommendations from industry professionals?</p>
            <a href="https://www.linkedin.com/in/bashaus/">Visit my LinkedIn profile</a>
          </div>
        </div>

        <div className="layout-split--text">
          <div className="layout-cta">
            <p>Looking to see some examples of code?</p>
            <a href="https://github.com/bashaus?tab=repositories">Visit my GitHub profile</a>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
