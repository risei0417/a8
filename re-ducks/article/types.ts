export type ArticleType = {
  description?: string;
  id?: string;
  mainContent?: string;
  mainImage?: string;
  mainTitle?: string;
  style?: string;
  title?: string;

  // for front
  lastSearched?: number;
  loading: boolean;
  error: boolean;
};
