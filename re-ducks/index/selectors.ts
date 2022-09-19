import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "re-ducks/store";

const selector = (state: RootState) => state.index;

const loadCategories = createSelector([selector], (state) => state.categories);

const loadInformation = createSelector(
  [selector],
  (state) => state.information
);

export default {
  loadCategories,
  loadInformation,
};
