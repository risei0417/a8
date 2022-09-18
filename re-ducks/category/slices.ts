import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCategoryState } from "re-ducks/category/initializes";
import { CategoryType } from "re-ducks/category/types";

const slice = createSlice({
  name: "category",
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
