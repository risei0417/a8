import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCategoryState } from "re_ducks/category/initializes";
import { CategoryType } from "re_ducks/category/types";

const slice = createSlice({
  name: "admin",
  initialState: initialCategoryState,
  reducers: {
    save(_: CategoryType, action: PayloadAction<CategoryType>) {
      return action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
