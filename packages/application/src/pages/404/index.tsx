import { HeaderTextPartial } from "@bashkim-com/design-system";

import { Page } from "%components/Page";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";

// import styles from "./styles.module.scss";

const ErrorNotFoundPage = (): JSX.Element => (
  <Page backButton={MenuBackButtonHomeImpl}>
    <HeaderTextPartial>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for does not exist</p>
    </HeaderTextPartial>
  </Page>
);

export default ErrorNotFoundPage;
