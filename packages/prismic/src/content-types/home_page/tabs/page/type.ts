import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";

export type HomePageContentTypePageTab = {
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
        image_header_desktop?: PrismicImageType;
        image_header_mobile?: PrismicImageType;
      };
      link_type?: string;
      isBroken: boolean;
    };
  }>;
};
