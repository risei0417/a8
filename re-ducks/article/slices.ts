import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialArticleState } from "re-ducks/article/initializes";
import { ArticleType } from "re-ducks/article/types";

const slice = createSlice({
  name: "article",
  initialState: initialArticleState,
  reducers: {
    save(_: ArticleType, action: PayloadAction<ArticleType>) {
      return { ...action.payload, lastSearched: Date.now(), loading: false, error: false };
    },
    error() {
      return { loading: false, error: true};
    }
  },
});

export const actions = slice.actions;
export default slice.reducer;
