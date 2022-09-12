export type CategoryType = {
  articles?: CategoryArticleType[];
  content?: string;
  description?: string;
  id?: string;
  mainImage?: string;
  mainLabel?: string;
  style?: string;
  title?: string;
};

export type CategoryArticleType = {
  banner?: string;
  description?: string;
  link?: string;
  title?: string;
};
