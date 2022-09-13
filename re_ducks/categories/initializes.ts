import { CategoriesType } from "re_ducks/categories/types";

export const initialCategoriesState: CategoriesType = {
  list: [],
  lastSearched: 0,
  loading: true,
  error: false,
};
