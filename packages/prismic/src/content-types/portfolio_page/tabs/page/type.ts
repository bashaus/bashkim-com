import ImagePropType from "%types/image";
import DocumentLinkPropType from "%types/document-link";

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
