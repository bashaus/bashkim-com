interface RichTextPrismicItemType<Type> {
  type: Type;
  text: string;
  spans: Array<any>;
}

type RichTextPrismicType<Type> = Array<RichTextPrismicItemType<Type>>;

export default RichTextPrismicType;
