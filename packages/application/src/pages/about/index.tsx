import {
  CallToAction,
  Group,
  HeaderImagePartial,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";

import { AboutCertifications } from "%components/AboutCertifications";
import { AboutEducation } from "%components/AboutEducation";
import { AboutProfile } from "%components/AboutProfile";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MetaDescription } from "%components/MetaDescription";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";
import { Page } from "%components/Page";
import HeaderDesktopImage from "%public/static/images/about/header-desktop.jpg";

const AboutPage = (): JSX.Element => (
  <Page backButton={MenuBackButtonHomeImpl}>
    <MetaTitle content="About" />
    <MetaDescription content="Information on the work history of Bashkim Isai" />
    <MetaKeywords content="bashkim isai, creative technologist, london" />

    <HeaderImagePartial
      id="AboutPage-Header"
      imageDesktop={HeaderDesktopImage.src}
    />

    <AboutProfile />
    <AboutEducation />
    <AboutCertifications />

    <Group>
      <SubtitlePartial>
        <h2>Looking for more?</h2>
      </SubtitlePartial>

      <SplitPartial>
        <SplitItemPartial>
          <div>
            <p>Looking for recommendations from industry professionals?</p>
            <CallToAction>
              <a
                href="https://www.linkedin.com/in/bashaus/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit my LinkedIn profile</span>
              </a>
            </CallToAction>
          </div>
        </SplitItemPartial>

        <SplitItemPartial>
          <div>
            <p>Looking to see some examples of code?</p>
            <CallToAction>
              <a
                href="https://github.com/bashaus?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit my GitHub profile</span>
              </a>
            </CallToAction>
          </div>
        </SplitItemPartial>
      </SplitPartial>
    </Group>
  </Page>
);

export default AboutPage;
