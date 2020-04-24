import EmbedPrismicType from '%prismic/types/embed';
import SliceType from '%prismic/types/slice';

interface GridEmbedSliceType extends SliceType {
  items: Array<{
    GridEmbedSliceType_Embed: EmbedPrismicType;
  }>;
  primary: {};
}

export default GridEmbedSliceType;
