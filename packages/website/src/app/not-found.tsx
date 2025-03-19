"use client";

import { PageHeaderPartial } from "@bashkim-com/design-system";
import Typography from "@mui/material/Typography";

import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";

const NotFoundPage = () => {
  return (
    <Page backButton={<HeaderActionHome />}>
      <PageHeaderPartial>
        <Typography variant="h2" component="h1" gutterBottom>
          Page not found
        </Typography>

        <Typography variant="subtitle1">
          The page you&apos;re looking for does not exist
        </Typography>
      </PageHeaderPartial>
    </Page>
  );
};

export default NotFoundPage;
