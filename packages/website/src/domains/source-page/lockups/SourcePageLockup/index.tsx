"use client";

import FullTextPartial from "@bashkim-com/design-system/FullTextPartial";
import Group from "@bashkim-com/design-system/Group";
import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import {
  GitHubVector,
  StorybookVector,
} from "@bashkim-com/design-system/SocialsAssets";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import backgroundPhoto from "@/domains/source-page/assets/background.jpg";
import githubCommitsPhoto from "@/domains/source-page/assets/github-commits.png";
import storybookGridPhoto from "@/domains/source-page/assets/storybook-grid.png";
import SourceCard from "@/domains/source-page/components/SourceCard";
import {
  getExternalGitHubRepositoryUrl,
  getExternalStorybookUrl,
} from "@/libraries/app/navigation";

export default function SourcePageLockup() {
  const t = useTranslations("SourcePageLockup");

  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <PageHeaderPartial imageDesktop={backgroundPhoto.src}>
        <Typography variant="h2" component="h1">
          {t("pageTitle")}
        </Typography>

        <Typography variant="h6" component="p">
          {t("pageSubtitle")}
        </Typography>
      </PageHeaderPartial>

      <Group>
        <FullTextPartial>
          <Typography variant="h4" gutterBottom>
            {t("summaryHeading")}
          </Typography>
          <Typography gutterBottom>{t("summaryParagraph1")}</Typography>
          <Typography>{t("summaryParagraph2")}</Typography>
        </FullTextPartial>

        <FullTextPartial>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SourceCard
                href={getExternalGitHubRepositoryUrl()}
                image={githubCommitsPhoto.src}
                icon={<GitHubVector width={32} height={32} />}
                title={t("sourceCodeTitle")}
              >
                <Typography>{t("sourceCodeDescription")}</Typography>
              </SourceCard>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <SourceCard
                href={getExternalStorybookUrl()}
                image={storybookGridPhoto.src}
                icon={<StorybookVector width={32} height={32} />}
                title={t("designSystemTitle")}
              >
                <Typography>{t("designSystemDescription")}</Typography>
              </SourceCard>
            </Grid>
          </Grid>
        </FullTextPartial>
      </Group>
    </Page>
  );
}
