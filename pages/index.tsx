import { Index } from "components/Index";
import { CommonConstant } from "constants/common";
import { DefaultLayout } from "layout/default";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ホーム | {CommonConstant.APP_NAME}</title>
        <meta name="description" content="markone" />
      </Head>

      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
};

export default Home;
