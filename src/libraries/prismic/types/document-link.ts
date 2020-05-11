interface DocumentLinkPrismicType<T> {
  id: string;
  type: string;
  tags: Array<any>;
  slug: string;
  lang: string;
  data: T;
  link_type: "Document";
  isBroken: boolean;
}

export default DocumentLinkPrismicType;
