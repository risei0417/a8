import { CategoryType } from "re-ducks/category/types";
import { useMemo } from "react";
import { Articles } from "components/molecules/common/category/Articles";
import { Main } from "components/molecules/common/category/Main";

type Props = {
  data: CategoryType;
};

export const CategoryOrganism = (props: Props) => {
  const { data } = props;

  const articles = useMemo(() => data.articles ?? [], [data.articles]);

  return (
    <div id="container" style={{ paddingBottom: "3rem" }}>
      <Main mainImage={data.mainImage} mainLabel={data.mainLabel} />
      <Articles categoryId={data.id} dataList={articles} />
    </div>
  );
};
