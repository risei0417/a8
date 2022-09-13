import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlices from "re_ducks/categories/slices";
import categorySlices from "re_ducks/category/slices";

const rootReducer = combineReducers({
  categories: categoriesSlices,
  category: categorySlices,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
