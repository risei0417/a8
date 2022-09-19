import { CategoryType } from "re-ducks/category/types";
import { useMemo } from "react";
import { Articles } from "components/molecules/common/category/Articles";
import { Main } from "components/molecules/common/category/Main";

type Props = {
  data: CategoryType;
};

export const CategoryOrganism = (props: Props) => {
  const { data } = props;

  const articles = useMemo(
    () =>
      data.articles
        ?.filter((article) => !article.pending)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) ?? [],
    [data.articles]
  );

  return (
    <div id="container" style={{ paddingBottom: "3rem" }}>
      <Main mainImage={data.mainImage} mainLabel={data.mainLabel} />
      <Articles categoryId={data.id} dataList={articles} />
    </div>
  );
};
