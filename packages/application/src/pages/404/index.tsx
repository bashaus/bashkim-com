import { HeaderTextPartial } from "@bashkim-com/design-system";

import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { Page } from "%components/Page";

const ErrorNotFoundPage = (): JSX.Element => (
  <Page backButton={MenuBackButtonHomeImpl}>
    <HeaderTextPartial>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for does not exist</p>
    </HeaderTextPartial>
  </Page>
);

export default ErrorNotFoundPage;
