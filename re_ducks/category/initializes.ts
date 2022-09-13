import { CategoryType } from "re_ducks/category/types";

export const initialCategoryState: CategoryType = {
  articles: [],
  content: "",
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
