"use client";

import { PageHeaderPartial } from "@bashkim-com/design-system";

import MenuButtonHome from "../components/MenuButtonHome";
import Page from "../components/Page";

const NotFoundPage = () => {
  return (
    <Page backButton={<MenuButtonHome />}>
      <PageHeaderPartial>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for does not exist</p>
      </PageHeaderPartial>
    </Page>
  );
};

export default NotFoundPage;
