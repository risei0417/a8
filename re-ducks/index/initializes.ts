import { IndexType } from "re-ducks/index/types";

export const initialIndexState: IndexType = {
  categories: [],
  information: [],
  lastSearched: 0,
  loading: true,
  error: false,
};
