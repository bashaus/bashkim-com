"use client";

import {
  CallToAction,
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";

import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { Page } from "../../components/Page/Page";
import { AboutCertifications } from "./components/AboutCertifications/AboutCertifications";
import { AboutEducation } from "./components/AboutEducation/AboutEducation";
import { AboutPageHeader } from "./components/AboutPageHeader/AboutPageHeader";
import { AboutPrinciples } from "./components/AboutPrinciples/AboutPrinciples";

export const AboutPageLockup = () => (
  <Page backButton={MenuButtonHome}>
    <AboutPageHeader />
    <AboutPrinciples />
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
