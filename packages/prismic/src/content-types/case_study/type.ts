import type { PrismicContentType } from "../../traits/content-type";

import type { CaseStudyContentTypeAccoladesTab } from "./tabs/accolades/type";
import type { CaseStudyContentTypeCollaboratorsTab } from "./tabs/collaborators/type";
import type { CaseStudyContentTypeExhibitionsTab } from "./tabs/exhibitions/type";
import type { CaseStudyContentTypeImagesTab } from "./tabs/images/type";
import type { CaseStudyContentTypeInfoTab } from "./tabs/info/type";
import type { CaseStudyContentTypePageTab } from "./tabs/page/type";
import type { CaseStudyContentTypeSeoTab } from "./tabs/seo/type";

export type CaseStudyContentType = PrismicContentType &
  CaseStudyContentTypeAccoladesTab &
  CaseStudyContentTypeCollaboratorsTab &
  CaseStudyContentTypeExhibitionsTab &
  CaseStudyContentTypeImagesTab &
  CaseStudyContentTypeInfoTab &
  CaseStudyContentTypePageTab &
  CaseStudyContentTypeSeoTab;
