"use client";

import {
  Group,
  SplitItemPartial,
  SplitPartial,
  SubtitlePartial,
} from "@bashkim-com/design-system";
import { Button } from "@mui/material";

import { MenuButtonHome } from "../../../../components/MenuButtonHome";
import { Page } from "../../../../components/Page";
import { AboutCertifications } from "../AboutCertifications";
import { AboutEducation } from "../AboutEducation";
import { AboutPageHeader } from "../AboutPageHeader";
import { AboutPrinciples } from "../AboutPrinciples";

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
