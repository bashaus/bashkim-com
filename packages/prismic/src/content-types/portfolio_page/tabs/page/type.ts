import type ImagePropType from "@bashkim-com/prismic/types/image";
import type DocumentLinkPropType from "@bashkim-com/prismic/types/document-link";

type PortfolioPageContentTypePageTab = {
  featured: Array<{
    featured_title: string;
    featured_description: string;
    featured_case_study: DocumentLinkPropType<{
      meta_title: string;
      meta_description: string;
      image_header_desktop: ImagePropType;
      image_header_mobile: ImagePropType;
    }>;
  }>;
};

export default PortfolioPageContentTypePageTab;
