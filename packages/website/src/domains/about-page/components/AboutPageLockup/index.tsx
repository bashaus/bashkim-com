"use client";

import Group from "@bashkim-com/design-system/Group";
import SplitItemPartial from "@bashkim-com/design-system/SplitItemPartial";
import SplitPartial from "@bashkim-com/design-system/SplitPartial";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import Button from "@mui/material/Button";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import AboutCertifications from "@/domains/about-page/components/AboutCertifications";
import AboutEducation from "@/domains/about-page/components/AboutEducation";
import AboutPageHeader from "@/domains/about-page/components/AboutPageHeader";
import AboutPrinciples from "@/domains/about-page/components/AboutPrinciples";

export default function AboutPageLockup() {
  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
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
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/bashaus/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit my LinkedIn profile
              </Button>
            </div>
          </SplitItemPartial>

          <SplitItemPartial>
            <div>
              <p>Looking to see some examples of code?</p>
              <Button
                variant="outlined"
                href="https://github.com/bashaus?tab=repositories"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit my GitHub profile
              </Button>
            </div>
          </SplitItemPartial>
        </SplitPartial>
      </Group>
    </Page>
  );
}
