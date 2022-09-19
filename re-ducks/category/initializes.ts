import { CategoryType } from "re-ducks/category/types";

export const initialCategoryState: CategoryType = {
  articles: [],
  description: "",
  id: "",
  mainImage: "",
  mainLabel: "",
  style: "",
  title: "",
  lastSearched: 0,
  loading: true,
  error: false,
};
