"use client";

import FullTextPartial from "@bashkim-com/design-system/FullTextPartial";
import Group from "@bashkim-com/design-system/Group";
import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import {
  GitHubVector,
  StorybookVector,
} from "@bashkim-com/design-system/SocialsAssets";
import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import backgroundPhoto from "@/domains/source-page/assets/background.jpg";
import githubCommitsPhoto from "@/domains/source-page/assets/github-commits.png";
import storybookGridPhoto from "@/domains/source-page/assets/storybook-grid.png";

import SourceCard from "../SourceCard";

export default function SourcePageLockup() {
  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <PageHeaderPartial imageDesktop={backgroundPhoto.src}>
        <Typography variant="h2" component="h1">
          View source
        </Typography>

        <Typography variant="h6" component="p">
          See how this website has been put together
        </Typography>
      </PageHeaderPartial>

      <Group>
        <SubtitlePartial title="This website is open source" />

        <FullTextPartial>
          <Typography gutterBottom>
            Curious how it&apos;s built? Everything is out in the open: from
            architecture to component logic and styling. It&apos;s a great way
            to understand how I approach problem-solving, design systems, and
            front-end development.
          </Typography>

          <Typography gutterBottom>
            Whether you&apos;re exploring for inspiration, reviewing code
            quality, or just interested in the tech stack — check it out.
          </Typography>
        </FullTextPartial>

        <FullTextPartial>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SourceCard
                href="https://www.github.com/bashaus/bashkim-com"
                image={githubCommitsPhoto.src}
                icon={<GitHubVector width={32} height={32} />}
                title="Source code"
              >
                <Typography>
                  Browse the source code for this website.
                </Typography>
              </SourceCard>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <SourceCard
                href="https://ui.bashkim.com"
                image={storybookGridPhoto.src}
                icon={<StorybookVector width={32} height={32} />}
                title="Design system"
              >
                <Typography>
                  Interact with each component in isolation via Storybook.
                </Typography>
              </SourceCard>
            </Grid>
          </Grid>
        </FullTextPartial>
      </Group>
    </Page>
  );
}
