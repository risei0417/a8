export type CategoryType = {
  articles?: CategoryArticleType[];
  content?: string;
  description?: string;
  id?: string;
  mainImage?: string;
  mainLabel?: string;
  style?: string;
  title?: string;

  // for front
  lastSearched?: number;
};

export type CategoryArticleType = {
  banner?: string;
  description?: string;
  link?: string;
  title?: string;
};
