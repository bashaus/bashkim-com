import { HeaderTextPartial } from "@bashkim-com/design-system";

import { MenuButtonHome } from "%components/MenuButtonHome";
import { Page } from "%components/Page";

const ErrorNotFoundPage = () => (
  <Page backButton={MenuButtonHome}>
    <HeaderTextPartial>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for does not exist</p>
    </HeaderTextPartial>
  </Page>
);

export default ErrorNotFoundPage;
