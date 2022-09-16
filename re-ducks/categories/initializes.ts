import { CategoriesType } from "re-ducks/categories/types";

export const initialCategoriesState: CategoriesType = {
  list: [],
  lastSearched: 0,
  loading: true,
  error: false,
};
