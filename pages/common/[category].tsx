import { Category } from "components/templates/common/Category";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Parts404 } from "components/organisms/404";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "re_ducks/store";
import { categoryOperations } from "re_ducks/category";
import { searchAgain } from "utils/time";
import { Progress } from "components/organisms/Progress";

const Common = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const [category, setCategory] = useState<string>("");

  const data = useSelector((state: RootState) => state.category);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const value = (() => {
      const value = router.query.category ?? "";
      return Array.isArray(value) ? value[0] : value;
    })();

    setCategory(value);

    if (searchAgain(data.id != value, data.lastSearched ?? 0)) {
      dispatch(categoryOperations.fetchDataList({ category: value }));
    }

    // eslint-disable-next-line
  }, [router.isReady]);

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
