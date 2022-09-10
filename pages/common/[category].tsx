import { Category } from "components/common/Category";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Loading } from "parts/Loading";
import { useEffect, useState } from "react";

const Common = () => {
  const router = useRouter();

  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const c = router.query.category ?? "";
    setCategory(Array.isArray(c) ? c[0] : c);
    // eslint-disable-next-line
  }, [router.isReady]);

  if (!category) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>
          {category} | {CommonConstant.APP_NAME}
        </title>
        <meta name="description" content="markone" />
      </Head>

      <DefaultLayout>
        <Category category={category} />
      </DefaultLayout>
    </>
  );
};

export default Common;
