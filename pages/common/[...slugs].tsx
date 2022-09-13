import { Category } from "components/templates/common/Category";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import Head from "next/head";
import { Parts404 } from "components/organisms/404";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "re_ducks/store";
import { categoryOperations } from "re_ducks/category";
import { searchAgain } from "utils/time";
import { Progress } from "components/organisms/Progress";
import { GetStaticPaths, GetStaticProps } from "next";

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
    return <Parts404 />;
  }

  if (data.loading) {
    return <Progress />;
  }

  return (
    <>
      <Head>
        <title>
          {data.title} | {CommonConstant.APP_NAME}
        </title>
        <meta name="description" content={data.description} />
      </Head>

      <DefaultLayout>
        <Category data={data} />
      </DefaultLayout>
    </>
  );
};

export default Common;
