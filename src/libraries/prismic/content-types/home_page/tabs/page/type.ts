import ImagePropType from "%prismic/types/image";

interface HomePageContentTypePageTab {
  featured_case_studies: Array<{
    featured_case_study: {
      id: string;
      type: string;
      tags: Array<string>;
      slug: string;
      lang: string;
      uid: string;
      data: {
        meta_title?: string;
        meta_description?: string;
        image_header_desktop?: ImagePropType;
        image_header_mobile?: ImagePropType;
      };
      link_type?: string;
      isBroken: boolean;
    };
  }>;
}

export default HomePageContentTypePageTab;
