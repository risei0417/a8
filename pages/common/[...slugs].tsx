import { CommonConstant } from "constants/common";
import Head from "next/head";
import { _404 } from "components/templates/_404";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "re-ducks/store";
import { categoryOperations } from "re-ducks/category";
import { searchAgain } from "utils/time";
import { GetStaticPaths, GetStaticProps } from "next";
import { ProgressTemplate } from "components/templates/ProgressTemplate";
import { CategoryTemplate } from "components/templates/common/CategoryTemplate";
import { ArticleTemplate } from "components/templates/common/ArticleTemplate";
import { articleOperations } from "re-ducks/article";

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

  const categoryData = useSelector((state: RootState) => state.category);

  const articleData = useSelector((state: RootState) => state.article);

  useEffect(() => {
    if (
      searchAgain(
        article
          ? articleData.lastSearched ?? 0
          : categoryData.lastSearched ?? 0,
        article ? articleData.id != article : categoryData.id != category
      )
    ) {
      dispatch(
        article
          ? articleOperations.fetchData(`${category}-${article}`)
          : categoryOperations.fetchData(category)
      );
    }
    // eslint-disable-next-line
  }, [article]);

  if (article ? articleData.error : categoryData.error) {
    return <_404 />;
  }

  if (article ? articleData.loading : categoryData.loading) {
    return <ProgressTemplate />;
  }

  return (
    <>
      <Head>
        <title>
          {article ? articleData.title : categoryData.title} |{" "}
          {CommonConstant.APP_NAME}
        </title>
        <meta
          name="description"
          content={article ? articleData.description : categoryData.description}
        />
        <meta
          property="og:title"
          content={article ? articleData.title : categoryData.title}
        />
        <meta
          property="og:description"
          content={article ? articleData.description : categoryData.description}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={article ? articleData.mainImage : categoryData.mainImage}
        />
        <meta property="og:url" content={location.href} />
        <meta property="og:site_name" content={CommonConstant.APP_NAME} />
        <meta property="og:locale" content="ja_JP" />
        <link rel="canonical" href={article ? `${CommonConstant.APP_URL}${category}/${article}/` : `${CommonConstant.APP_URL}${category}/`} />
      </Head>

      {article ? (
        <ArticleTemplate data={articleData} />
      ) : (
        <CategoryTemplate data={categoryData} />
      )}
    </>
  );
};

export default Common;
