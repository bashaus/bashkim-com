import LinkPrismicType from "@bashkim-com/prismic/types/link";
import RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type ExhibitionSliceType = SliceType & {
  items: Array<any>;
  primary: {
    exhibition_slice_type_name: RichTextPrismicType<"heading3">;
    exhibition_slice_type_link: LinkPrismicType;
    exhibition_slice_type_opening_date?: string;
    exhibition_slice_type_closing_date?: string;
    exhibition_slice_type_location: RichTextPrismicType<"paragraph">;
  };
};

export default ExhibitionSliceType;
