import { Pending } from "components/atoms/index/Pending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesOperations } from "re-ducks/categories";
import { AppDispatch, RootState } from "re-ducks/store";
import { searchAgain } from "utils/time";
import { useRouter } from "next/dist/client/router";

export const CategoriesMolecule = () => {

  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();

  const data = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (searchAgain(data.lastSearched ?? 0)) {
      dispatch(categoriesOperations.fetchDataList());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {(data.list ?? []).map((category) => {
        if (category.pending) {
          return <Pending key={category.id} title={category.title} />;
        }

        return (
          <div
            key={category.id}
            onClick={() => router.push(`/common/${category.id}`)}
          >
            <span>{category.title}</span>
            <picture>
              <img src={category.icon ?? ''} alt="icon" />
            </picture>
          </div>
        );
      })}
    </div>
  );
};
