import AccoladesSchema from "./tabs/accolades/schema";
import CollaboratorsSchema from "./tabs/collaborators/schema";
import ExhibitionsSchema from "./tabs/exhibitions/schema";
import ImagesSchema from "./tabs/images/schema";
import InfoSchema from "./tabs/info/schema";
import PageSchema from "./tabs/page/schema";
import SeoSchema from "./tabs/seo/schema";

export default {
  Info: InfoSchema,
  Page: PageSchema,
  SEO: SeoSchema,
  Images: ImagesSchema,
  Exhibitions: ExhibitionsSchema,
  Accolades: AccoladesSchema,
  Collaborators: CollaboratorsSchema,
};
