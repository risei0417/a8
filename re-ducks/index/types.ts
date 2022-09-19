import { CategoryType } from "re-ducks/category/types";
import { TimeStamp } from "utils/time";

export type IndexType = {
  categories?: CategoryType[];
  information?: Information[];

  // for front
  lastSearched?: number;
  loading: boolean;
  error: boolean;
};

type Information = {
  date?: TimeStamp;
  title?: string;
};
