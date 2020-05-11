import CaseStudyContentTypeAccoladesTab from "./tabs/accolades/type";
import CaseStudyContentTypeCollaboratorsTab from "./tabs/collaborators/type";
import CaseStudyContentTypeExhibitionsTab from "./tabs/exhibitions/type";
import CaseStudyContentTypeImagesTab from "./tabs/images/type";
import CaseStudyContentTypeInfoTab from "./tabs/info/type";
import CaseStudyContentTypePageTab from "./tabs/page/type";
import CaseStudyContentTypeSeoTab from "./tabs/seo/type";

export interface CaseStudyContentTypeData
  extends CaseStudyContentTypeAccoladesTab,
    CaseStudyContentTypeCollaboratorsTab,
    CaseStudyContentTypeExhibitionsTab,
    CaseStudyContentTypeImagesTab,
    CaseStudyContentTypeInfoTab,
    CaseStudyContentTypePageTab,
    CaseStudyContentTypeSeoTab {}

interface CaseStudyContentType {
  id: string;
  uid: string;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date: string;
  last_publication_date: string;
  slugs?: Array<string>;
  linked_documents?: Array<any>;
  lang: string;
  alternate_languages: Array<any>;
  data: CaseStudyContentTypeData;
}

export default CaseStudyContentType;
