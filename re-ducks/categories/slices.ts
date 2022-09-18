import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCategoriesState } from "re-ducks/categories/initializes";
import { CategoriesType } from "re-ducks/categories/types";
import { CategoryType } from "re-ducks/category/types";

const slice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    save(_: CategoriesType, action: PayloadAction<CategoryType[]>) {
      return { list: action.payload, lastSearched: Date.now(), loading: false, error: false };
    },
    error() {
      return { loading: false, error: true};
    }
  },
});

export const actions = slice.actions;
export default slice.reducer;
