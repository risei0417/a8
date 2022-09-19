import { Pending } from "components/atoms/index/Pending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexOperations, indexSelectors } from "re-ducks/index";
import { categoryOperations } from "re-ducks/category";
import { AppDispatch, RootState } from "re-ducks/store";
import { searchAgain } from "utils/time";
import { useRouter } from "next/dist/client/router";

export const CategoriesMolecule = () => {

  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);

  const categories = indexSelectors.loadCategories(selector) ?? [];

  useEffect(() => {
    if (searchAgain(selector.index.lastSearched ?? 0)) {
      dispatch(indexOperations.fetchDataList());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {categories.map((category) => {
        if (category.pending) {
          return <Pending key={category.id} title={category.title} />;
        }

        return (
          <div
            key={category.id}
            onClick={async () => {
              await dispatch(categoryOperations.setCategory(category));
              router.push(`/common/${category.id}`);
            }}
          >
            <span>{category.indexTitle}</span>
            <picture>
              <img src={category.icon ?? ''} alt="icon" />
            </picture>
          </div>
        );
      })}
    </div>
  );
};
