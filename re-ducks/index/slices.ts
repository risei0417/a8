import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialIndexState } from "re-ducks/index/initializes";
import { IndexType } from "re-ducks/index/types";

const slice = createSlice({
  name: "index",
  initialState: initialIndexState,
  reducers: {
    save(_: IndexType, action: PayloadAction<IndexType>) {
      const categories = (action.payload.categories ?? []).sort(
        (a: any, b: any) => a.order - b.order
      );

      const information = (action.payload.information ?? []).sort(
        (a: any, b: any) => b.date?._seconds - a.date?._seconds
      );

      return {
        categories,
        information,
        lastSearched: Date.now(),
        loading: false,
        error: false,
      };
    },

    error() {
      return { loading: false, error: true };
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
