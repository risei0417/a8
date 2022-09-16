import { Index } from "components/templates/Index";
import { CommonConstant } from "constants/common";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ホーム | {CommonConstant.APP_NAME}</title>
        <meta name="description" content="markone" />
      </Head>

      <Index />
    </>
  );
};

export default HomePage;
