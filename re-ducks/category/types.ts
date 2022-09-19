export type CategoryType = {
  articles?: CategoryArticleType[];
  icon?: string;
  description?: string;
  id?: string;
  indexTitle?: string;
  mainImage?: string;
  mainLabel?: string;
  order?: number;
  pending?: boolean;
  style?: string;
  title?: string;

  // for front
  lastSearched?: number;
  loading: boolean;
  error: boolean;
};

export type CategoryArticleType = {
  banner?: string;
  description?: string;
  link?: string;
  order?: number;
  pending?: boolean;
  title?: string;
};
