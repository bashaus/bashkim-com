export type MediumArticle = {
  title: string;
  subtitle: string;
  url: string;
  image: string;
  pubDate: Date;
  multipart?: {
    part: string;
    parts: string;
  };
};

export type GetMediumSocialsResponse = {
  articles: Array<MediumArticle>;
};
