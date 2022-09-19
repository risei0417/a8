import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articleSlices from "re-ducks/article/slices";
import indexSlices from "re-ducks/index/slices";
import categorySlices from "re-ducks/category/slices";

const rootReducer = combineReducers({
  article: articleSlices,
  category: categorySlices,
  index: indexSlices,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
