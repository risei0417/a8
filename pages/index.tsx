import { Index } from "components/templates/Index";
import { CommonConstant } from "constants/common";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | {CommonConstant.APP_NAME}</title>
        <meta
          name="description"
          content="For engineer Tips&Tricks"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={CommonConstant.APP_IMAGE_URL} />
        <meta property="og:url" content={CommonConstant.APP_URL} />
        <meta property="og:site_name" content={CommonConstant.APP_NAME} />
        <meta property="og:locale" content="ja_JP" />
        <link rel="canonical" href={CommonConstant.APP_URL} />
      </Head>

      <Index />
    </>
  );
};

export default HomePage;
