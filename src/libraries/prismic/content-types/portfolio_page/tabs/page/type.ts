import ImagePropType from '%prismic/types/image';
import DocumentLinkPropType from '%prismic/types/document-link';

interface PortfolioPageContentTypePageTab {
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
}

export default PortfolioPageContentTypePageTab;
