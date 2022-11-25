import { CookiesDetails } from "../../components/CookiesDetails/CookiesDetails";
import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { MetaDescription } from "../../components/MetaDescription/MetaDescription";
import { MetaTitle } from "../../components/MetaTitle/MetaTitle";
import { Page } from "../../components/Page/Page";

const CookiesPage = () => (
  <Page backButton={MenuButtonHome}>
    <MetaTitle content="Cookie policy" />
    <MetaDescription content="How your personal information is used on this website" />

    <CookiesDetails />
  </Page>
);

export default CookiesPage;
