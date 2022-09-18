import { ArticleType } from "re-ducks/article/types";

export const initialArticleState: ArticleType = {
  description: "",
  id: "",
  mainImage: "",
  mainContent: "",
  style: "",
  title: "",
  lastSearched: 0,
  loading: true,
  error: false,
};
