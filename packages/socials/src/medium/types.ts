export type MediumArticle = {
  title: string;
  subtitle: string;
  url: string;
  multipart?: {
    part: string;
    parts: string;
  };
};

export type GetMediumSocialsResponse = {
  articles: Array<MediumArticle>;
};
