import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlices from "re_ducks/category/slices";

const rootReducer = combineReducers({
  category: categorySlices,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
