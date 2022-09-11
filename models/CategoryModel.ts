export type CategoryModel = {
  articles?: CategoryArticlesModel[];
  content?: string;
  description?: string;
  id?: string;
  mainImage?: string;
  mainLabel?: string;
  style?: string;
  title?: string;
};

export type CategoryArticlesModel = {
  banner?: string;
  description?: string;
  link?: string;
  title?: string;
};
