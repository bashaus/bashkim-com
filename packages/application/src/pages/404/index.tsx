import { PartialHeaderText } from "@bashkim-com/design-system";

import { LayoutDefault } from "%components/LayoutDefault";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";

// import styles from "./styles.module.scss";

const ErrorNotFoundPage = (): JSX.Element => (
  <LayoutDefault backButton={MenuBackButtonHomeImpl}>
    <PartialHeaderText>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for does not exist</p>
    </PartialHeaderText>
  </LayoutDefault>
);

export default ErrorNotFoundPage;
