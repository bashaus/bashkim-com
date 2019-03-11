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
import PartialCallToAction from 'components/PartialCallToAction';
import PartialHeaderImage from 'components/PartialHeaderImage';
import PartialSplit from 'components/PartialSplit';
import PartialSplitItem from 'components/PartialSplitItem';
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

      <section className="group">
        <PartialSubtitle>
          <h2>Looking for more?</h2>
        </PartialSubtitle>

        <PartialSplit>
          <PartialSplitItem>
            <PartialCallToAction>
              <p>Looking for recommendations from industry professionals?</p>
              <a href="https://www.linkedin.com/in/bashaus/" target="_blank" rel="noreferrer noopener">
                Visit my LinkedIn profile
              </a>
            </PartialCallToAction>
          </PartialSplitItem>

          <PartialSplitItem>
            <PartialCallToAction>
              <p>Looking to see some examples of code?</p>
              <a href="https://github.com/bashaus?tab=repositories" target="_blank" rel="noreferrer noopener">
                Visit my GitHub profile
              </a>
            </PartialCallToAction>
          </PartialSplitItem>
        </PartialSplit>
      </section>
    </LayoutDefault>
  );
}
