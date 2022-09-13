import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCategoryState } from "re_ducks/category/initializes";
import { CategoryType } from "re_ducks/category/types";

const slice = createSlice({
  name: "admin",
  initialState: initialCategoryState,
  reducers: {
    save(_: CategoryType, action: PayloadAction<CategoryType>) {
      return { ...action.payload, lastSearched: Date.now(), loading: false, error: false };
    },
    error() {
      return { loading: false, error: true};
    }
  },
});

export const actions = slice.actions;
export default slice.reducer;
