import { CommonConstant } from "constants/common";
import Head from "next/head";
import { _404 } from "components/templates/_404";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "re-ducks/store";
import { categoryOperations } from "re-ducks/category";
import { searchAgain } from "utils/time";
import { GetStaticPaths, GetStaticProps } from "next";
import { Article } from "components/templates/common/Article";
import { ProgressTemplate } from "components/templates/ProgressTemplate";
import { CategoryTemplate } from "components/templates/common/CategoryTemplate";

type PathParams = {
  slugs: string[];
};

type Props = {
  category: string;
  article?: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: Object.entries(CommonConstant.COMMON_ROUTES).reduce<
      (
        | string
        | {
            params: PathParams;
            locale?: string | undefined;
          }
      )[]
    >((r, [category, articles]) => {
      r.push({ params: { slugs: [category] } });
      articles.forEach((article) => {
        r.push({ params: { slugs: [category, article] } });
      });
      return r;
    }, []),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slugs } = context.params as PathParams;

  const props: Props = {
    category: slugs[0],
    article: slugs[1] ?? null,
  };

  return { props };
};

const Common = (props: Props) => {
  const { category, article } = props;
  const dispatch: AppDispatch = useDispatch();

  const data = useSelector((state: RootState) => state.category);

  useEffect(() => {
    if (searchAgain(data.lastSearched ?? 0, data.id != category)) {
      dispatch(categoryOperations.fetchData(category));
    }
    // eslint-disable-next-line
  }, []);

  if (data.error) {
    return <_404 />;
  }

  if (data.loading) {
    return <ProgressTemplate />;
  }

  return (
    <>
      <Head>
        <title>
          {data.title} | {CommonConstant.APP_NAME}
        </title>
        <meta name="description" content={data.description} />
      </Head>

        {article ? <Article /> : <CategoryTemplate data={data} />}
    </>
  );
};

export default Common;
