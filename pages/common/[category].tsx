import { Category } from "components/common/Category";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import { CategoryModel } from "models/CategoryModel";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Parts404 } from "parts/404";
import { Loading } from "parts/Loading";
import { useEffect, useState } from "react";

const Common = () => {
  const router = useRouter();

  const [category, setCategory] = useState<string>("");

  const [data, setData] = useState<CategoryModel>();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const c = router.query.category ?? "";
    setCategory(Array.isArray(c) ? c[0] : c);

    (async () => {
      try {
        const res = await fetch(
          `${CommonConstant.API_BASE_URL}/getArticles`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ category: c }),
          }
        );

        setData(await res.json());
      } catch (_) {
        setData({});
      }
    })();

    // eslint-disable-next-line
  }, [router.isReady]);

  if (!category || !data) {
    return <Loading />;
  }

  if (!Object.keys(data).length) {
    return <Parts404 />;
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
