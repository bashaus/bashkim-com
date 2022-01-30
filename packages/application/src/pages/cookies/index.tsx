import { CookiesDetails } from "%components/CookiesDetails";
import { MenuButtonHome } from "%components/MenuButtonHome";
import { MetaDescription } from "%components/MetaDescription";
import { MetaTitle } from "%components/MetaTitle";
import { Page } from "%components/Page";

const CookiesPage = (): JSX.Element => (
  <Page backButton={MenuButtonHome}>
    <MetaTitle content="Cookie policy" />
    <MetaDescription content="How your personal information is used on this website" />

    <CookiesDetails />
  </Page>
);

export default CookiesPage;
