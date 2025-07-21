"use client";

import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import Typography from "@mui/material/Typography";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";

const NotFoundPage = () => {
  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <PageHeaderPartial>
        <Typography variant="h2" component="h1" gutterBottom>
          Page not found
        </Typography>

        <Typography variant="h5" component="p">
          The page you&apos;re looking for does not exist
        </Typography>
      </PageHeaderPartial>
    </Page>
  );
};

export default NotFoundPage;
