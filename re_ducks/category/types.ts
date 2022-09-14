export type CategoryType = {
  articles?: CategoryArticleType[];
  icon?: string;
  content?: string;
  description?: string;
  id?: string;
  mainImage?: string;
  mainLabel?: string;
  style?: string;
  title?: string;
  pending?: boolean;

  // for front
  lastSearched?: number;
  loading: boolean;
  error: boolean;
};

export type CategoryArticleType = {
  banner?: string;
  description?: string;
  link?: string;
  title?: string;
};
