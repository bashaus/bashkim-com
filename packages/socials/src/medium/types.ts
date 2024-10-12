export type MediumArticle = {
  title: string;
  subtitle: string;
  claps: number;
  url: string;
};

export type GetMediumSocialsResponse = {
  articles: Array<MediumArticle>;
};
