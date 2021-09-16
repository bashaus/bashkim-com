import {
  CallToAction,
  Group,
  PartialHeaderImage,
  PartialSplit,
  PartialSplitItem,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import { AboutProfile } from "%components/AboutProfile";
import { AboutEducation } from "%components/AboutEducation";
import { AboutCertifications } from "%components/AboutCertifications";
import { LayoutDefault } from "%components/LayoutDefault";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";

import styles from "./styles.module.scss";

const AboutPage = (): JSX.Element => (
  <LayoutDefault backButton={MenuBackButtonHomeImpl}>
    <MetaTitle content="About" />
    <MetaDescription content="Information on the work history of Bashkim Isai" />
    <MetaKeywords content="bashkim isai, creative technologist, london" />

    <PartialHeaderImage
      backgroundClassName={styles.Background}
      className={styles.Header}
      id="AboutPage-Header"
    />
    <AboutProfile />
    <AboutEducation />
    <AboutCertifications />

    <Group>
      <PartialSubtitle>
        <h2>Looking for more?</h2>
      </PartialSubtitle>

      <PartialSplit>
        <PartialSplitItem>
          <div>
            <p>Looking for recommendations from industry professionals?</p>
            <CallToAction>
              <a
                href="https://www.linkedin.com/in/bashaus/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>Visit my LinkedIn profile</span>
              </a>
            </CallToAction>
          </div>
        </PartialSplitItem>

        <PartialSplitItem>
          <div>
            <p>Looking to see some examples of code?</p>
            <CallToAction>
              <a
                href="https://github.com/bashaus?tab=repositories"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>Visit my GitHub profile</span>
              </a>
            </CallToAction>
          </div>
        </PartialSplitItem>
      </PartialSplit>
    </Group>
  </LayoutDefault>
);

export default AboutPage;
