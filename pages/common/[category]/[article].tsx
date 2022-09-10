import { Article } from "components/common/category/Article";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Loading } from "parts/Loading";
import { useEffect, useState } from "react";

const Common = () => {
  const router = useRouter();

  const [category, setCategory] = useState<string>("");
  const [article, setArticle] = useState<string>("");

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const c = router.query.category ?? "";
    const a = router.query.article ?? "";
    setCategory(Array.isArray(c) ? c[0] : c);
    setArticle(Array.isArray(a) ? a[0] : a);
    // eslint-disable-next-line
  }, [router.isReady]);

  if (!category || !article) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>
          {article} | {CommonConstant.APP_NAME}
        </title>
        <meta name="description" content="markone" />
      </Head>

      <DefaultLayout>
        <Article />
      </DefaultLayout>
    </>
  );
};

export default Common;
