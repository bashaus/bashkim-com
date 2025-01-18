export type MediumLink = {
  title: string;
  url: string;
};

export type MediumArticle = {
  title: string;
  subtitle: string;
  links: Array<MediumLink>;
};

export type GetMediumSocialsResponse = {
  articles: Array<MediumArticle>;
};
