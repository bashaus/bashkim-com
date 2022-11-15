import { PrismicDateTimeType } from "../types/DateTime";
import { PrismicRelatedDocumentType } from "../types/RelatedDocument";

export type PrismicContentType = {
  _meta: {
    /**
     * The id of the document.
     */
    id: string;

    /**
     * The uid of the document.
     */
    uid: string | null;

    /**
     * The type of the document.
     */
    type: string;

    /**
     * The tags of the document.
     */
    tags: Array<string>;

    /**
     * The language of the document.
     */
    lang: string;

    /**
     * Alternate languages the document.
     */
    alternateLanguages: Array<PrismicRelatedDocumentType>;

    /**
     * The first publication date of the document.
     * @type DateTime
     */
    firstPublicationDate: PrismicDateTimeType | null;

    /**
     * The last publication date of the document.
     * @type DateTime
     */
    lastPublicationDate: PrismicDateTimeType | null;
  };
};
