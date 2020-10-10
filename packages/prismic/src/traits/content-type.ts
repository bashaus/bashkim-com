type PrismicContentType = {
  id: string;
  uid?: string;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date: string | null;
  last_publication_date: string | null;
  slugs?: Array<string>;
  linked_documents?: Array<any>;
  lang?: string;
  alternate_languages: Array<any>;
};

export default PrismicContentType;
