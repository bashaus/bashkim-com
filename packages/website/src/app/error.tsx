"use client";

import { PageHeaderPartial } from "@bashkim-com/design-system";

import { MenuButtonHome } from "../components/MenuButtonHome";
import { Page } from "../components/Page";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

const RootError = ({ error /* , reset */ }: RootErrorProps) => {
  return (
    <Page backButton={MenuButtonHome}>
      <PageHeaderPartial>
        <h1>An error occurred</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </PageHeaderPartial>
    </Page>
  );
};

export default RootError;
