import { CategoryType } from "re-ducks/category/types";

export type CategoriesType = {
  list?: CategoryType[];

  // for front
  lastSearched?: number;
  loading: boolean;
  error: boolean;
};
