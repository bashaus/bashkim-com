export type MediumArticle = {
  title: string;
  subtitle: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  pubDate: Date;
  multipart?: {
    part: string;
    parts: string;
  };
};

export type GetMediumSocialsResponse = {
  series: Record<string, Array<MediumArticle>>;
};
